 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import IconButton from '@mui/material/IconButton';
 import MenuIcon from '@mui/icons-material/Menu';
 import { CiLight } from "react-icons/ci";
 import { MdLanguage } from "react-icons/md";


 export default function ButtonAppBar() {
   return (
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" sx={{ backgroundColor:'#fff' , border:'#E5E7EB' , borderRadius:'4px'}}>
        <Toolbar sx={{ minHeight: '74px !important' , color: '#3F3F46' }}>
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
          < CiLight/>
          <MdLanguage />
         </Toolbar>
       </AppBar>
     </Box>
   );
}