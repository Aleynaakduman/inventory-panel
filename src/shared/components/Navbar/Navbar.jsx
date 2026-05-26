 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import IconButton from '@mui/material/IconButton';
 import MenuIcon from '@mui/icons-material/Menu';
 import { CiLight } from "react-icons/ci";
 import { IoMoonSharp } from "react-icons/io5";
import './Navbar.css'


 export default function ButtonAppBar({darkMode, setDarkMode}) {



   return (
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" sx={{backgroundColor: darkMode ? '#1e293b' : '#fff' , border:'#E5E7EB' , borderRadius:'4px'}}>
        <Toolbar sx={{ minHeight: '74px !important' , color: darkMode ? '#fff': '#000' }}>
           <IconButton
             size="large"
            edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
          >
            <MenuIcon />
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             
           </Typography>
         <div className='nav-icon' >
          <div className="navbar-icon" onClick={()=> setDarkMode(!darkMode)}>{darkMode ?  <CiLight/> : <IoMoonSharp/>  } </div>
         </div>
         </Toolbar>
       </AppBar>
     </Box>
   );
}