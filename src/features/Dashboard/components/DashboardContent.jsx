import './DashboardContent.css'
import { MdOutlineInventory } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import {FiPlus} from "react-icons/fi";
import DashboardTable from './DashboardTable'
import {useEffect, useState} from 'react'
import { IoClose } from "react-icons/io5";

const DashboardContent = () => {
const [products, setProducts] = useState([])
useEffect(() => {
fetch('http://localhost:3001/products')
.then((ress) => ress.json())
.then((data) => setProducts(data))
},[])

const totalProducts = products.length;
const criticalStockCount = products.filter(p => p.status === 'kritik').length;
const outOfStockCount = products.filter(p => p.status === 'tükendi').length;

const [showForm, setShowForm] = useState(false);

const [newProduct, setNewProduct] = useState({
    name:"",
    categorry:"",
    quantity:"",
    unit:"",
    status:""
});


const handleChange = (e) => {
    setNewProduct({
        ...newProduct,[e.target.name]: e.target.value
    });
};

const handleAddProduct = async () => {

    if(!newProduct.name.trim()){
        alert("Ürün adı boş bırakılamaz!")
        return;
    }

      if (Number(newProduct.unit) < 0) {
    alert("Adet negatif olamaz!");
    return;
  }

  if (Number(newProduct.quantity) < 0) {
    alert("Birim değeri negatif olamaz!");
    return;
  }

  const response = await fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  });

  const addedProduct = await response.json();

  setProducts([...products, addedProduct]);

  setShowForm(false);

  setNewProduct({
    name: "",
    category: "",
    quantity: "",
    unit: "",
    status: ""
  });
};

  return (
    <div>

        {/*Dashboard İlk Kısım */}
        <div className="dashboard-cards">
            <div className="card1" >
                <div className="card-conteiner">
                   
                        <div className="card-icon1">
                            <MdOutlineInventory/>
                        </div>
                   
                    <div className="card-content">
                        <p> Ürün</p>
                    <h3>{totalProducts}</h3>
                    <p className='card-text' >Tüm ürün sayısı</p>
                    </div>
                </div>
            </div>

            <div className="card2"> 
                <div className="card-conteiner">
                   <div className="card-icon2" > <BsExclamationCircle/></div>
                        <div className="card-content">
                              <p>Kritik Stok</p>
                    <h3>{criticalStockCount}</h3>
                    <p  className='card-text' >Kritik stokta olan ürünler</p>
                        </div>
                </div>
            </div>


            <div className="card3">
                <div className="card-conteiner">
                   <div className="card-icon3">
                     <IoCloseCircleOutline/>
                   </div>
                      <div className="card-content">
                        <p>Tükenenler</p>
                    <h3>{outOfStockCount}</h3>
                    <p  className='card-text' >Stokta tükenen ürünler </p>
                      </div>
                </div>
            </div>
        </div>




        {/* Dasboard Tablo Kısmı */}
        <div className="dashboard-bottom">
            <div className="dashboard-bottom-content">
                    <h4>Ürünler</h4>
                    <div className="dashboard-btn">
    
                    <button className='btn-2'  onClick={() => setShowForm(true)} > 
                        <FiPlus /> Yeni Ürün Ekle</button>
                    </div>
            </div>
     {
  showForm && (
    <div className="product-form">
        <button
  className="close-form-btn"
  onClick={() => setShowForm(false)}
>
  <IoClose />
</button>

      <input
        type="text"
        name="name"
        placeholder="Ürün Adı"
        value={newProduct.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Kategori"
        value={newProduct.category}
        onChange={handleChange}
      />

      <input
        type="text"
        name="quantity"
        placeholder="Birim"
        value={newProduct.quantity}
        onChange={handleChange}
      />

      <input
        type="number"
        name="unit"
        placeholder="Adet"
        value={newProduct.unit}
        onChange={handleChange}
      />

      <select
        name="status"
        value={newProduct.status}
        onChange={handleChange}
      >
        <option value="">Durum Seç</option>
        <option value="stokta">Stokta</option>
        <option value="kritik">Kritik</option>
        <option value="tükendi">Tükendi</option>
      </select>

      <button className='save-btn' onClick={handleAddProduct}>
        Kaydet
      </button>

    </div>
  )
}

            <div className="dashboard-bottom-table">
                <DashboardTable products={products} setProducts={setProducts}/>

            </div>
        </div>
    </div>
  )
}

export default DashboardContent