import './DashboardContent.css'
import { MdOutlineInventory } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TfiExport } from "react-icons/tfi";
import {FiPlus} from "react-icons/fi";
import DashboardTable from './DashboardTable'
import {useEffect, useState} from 'react'

const DashboardContent = () => {
const [products, setProducts] = useState([])
useEffect(() => {
fetch('http://localhost:3001/products')
.then((ress) => ress.json())
.then((data) => setProducts(data))
})

const totalProducts = products.length;
const criticalStockCount = products.filter(p => p.status === 'kritik').length;
const outOfStockCount = products.filter(p => p.status === 'tükendi').length;
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
                    <button  className='btn-1' >
                        <TfiExport /> Dışa Aktar
                    </button>
                    <button className='btn-2' > 
                        <FiPlus /> Yeni Ürün Ekle</button>
                    </div>
            </div>

            <div className="dashboard-bottom-table">
                <DashboardTable/>

            </div>
        </div>
    </div>
  )
}

export default DashboardContent