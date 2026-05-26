
import "./App.css";
import Sidebar from "./shared/components/Sidebar/Sidebar";
import Navbar from "./shared/components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import DashboardContent from "./features/Dashboard/components/DashboardContent";
import {useState} from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {

const [darkMode, setDarkMode] = useState(false)
   const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      
      ...(darkMode && {
        background: {
          default: "#1a1c23", 
          paper: "#242631",  
        },
        text: {
          primary: "#ffffff",
        }
      }),
    },
  });


  return (

  
    <ThemeProvider theme={theme}>
      <div className={darkMode ? "app dark" : "app"}></div>
<div className={darkMode ? "app dark" : "app"} >
          <BrowserRouter>

 
    <div className="app-loyout">
      <Sidebar/>

      <div className="right-container">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="main-content">
          <DashboardContent />
        </div>
      </div>
   </div>

    </BrowserRouter>

</div>

    </ThemeProvider>

  

  
  )
}

export default App
