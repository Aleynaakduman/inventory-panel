import './DashboardContent.css'
import { MdOutlineInventory } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";


const DashboardContent = () => {
  return (
    <div>
        <div className="dashboard-cards">
            <div className="card1" >
                <div className="card-conteiner">
                   
                        <div className="card-icon1">
                            <MdOutlineInventory/>
                        </div>
                   
                    <div className="card-content">
                        <p>Toplam Ürün</p>
                    <h3>128</h3>
                    <p className='card-text' >Tüm ürün sayısı</p>
                    </div>
                </div>
            </div>

            <div className="card2"> 
                <div className="card-conteiner">
                   <div className="card-icon2" > <BsExclamationCircle/></div>
                        <div className="card-content">
                              <p>Kritik Stok</p>
                    <h3>18</h3>
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
                    <h3>7</h3>
                    <p  className='card-text' >Stokta tükenen ürünler </p>
                      </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DashboardContent