import '../Sidebar/Sidebar.css'
import { MdOutlineInventory } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar-container' >
        <div className="sidebar-top">
            <div className="sidebar-text">
                <div className="icon"><MdOutlineInventory /></div>
             <h3>Envanter Takip Paneli</h3>
            </div>

            <div className="solid"></div>
        </div>


        <div className="sidebar-bottom">
                <ul>
                    <li>
                        <CiHome/>
                        <Link>Dashboard</Link>
                    </li>
                </ul>

                 <ul>
                    <li>
                        < GoPackage />
                        <Link>Ürünler</Link>
                    </li>
                </ul>


                 <ul>
                    <li>
                        <BiCategory/>
                        <Link>Kategoriler</Link>
                    </li>
                </ul>


                 <ul>
                    <li>
                        <IoAnalytics/>
                        <Link>Raporlar</Link>
                    </li>
                </ul>


                 <ul>
                    <li>
                        <IoSettingsOutline/>
                        <Link>Ayarlar</Link>
                    </li>
                </ul>
        </div>


        <div className="sidebar-card">
           <div className="icon-text">
             <FaRegLightbulb/>
            <p>İpucu</p>
           </div>
           <p>Stok hareketlerinizin geçmişini Excel veya PDF olarak dışa aktarabileceğinizi biliyor muydunuz?</p>
        </div>
    </div>
  )
}

export default Sidebar