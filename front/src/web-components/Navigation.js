import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/material/';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import searchIcon from '@mui/icons-material/Search'
import cartIcon from '@mui/icons-material/Cart'
import userIcon from '@mui/icons-material/Person'
import { useState } from 'react';

const Navigation = () => {
    const [value, setValue] = useState(0);

    return ( 
        <div>
        
  (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </BottomNavigation>
    </Box>
  );
  <ul style={{width:'400px',height:'60px',display:'flex',flexDirection:'row',marginLeft:'650px',marginTop:'-80px'}}>
    <li style={{marginLeft:'30px'}}>Home</li>
    <li style={{marginLeft:'30px'}}>Gallery</li>  
    <li style={{marginLeft:'30px'}}>Contact</li>
    <li style={{marginLeft:'30px'}}>About </li>
    <li style={{marginLeft:'30px'}}>Blog</li>
  </ul>

  <div>
    <
  </div>
  
        </div>
     );
}
 
export default Navigation;