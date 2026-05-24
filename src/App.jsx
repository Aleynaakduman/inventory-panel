
import "./App.css";
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navbar from "./shared/components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import DashboardContent from "./features/Dashboard/components/DashboardContent";
function App() {


  return (
   
    <BrowserRouter>
   <div className="app-loyout">
      <Sidebar/>

      <div className="right-container">
        <Navbar/>
        <div className="main-content">
          <DashboardContent/>
        </div>
      </div>
   </div>
    </BrowserRouter>
    

  
  )
}

export default App
