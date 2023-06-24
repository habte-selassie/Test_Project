import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useState } from 'react';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'
import backgroundImage from '../web-components/assets/whites.png'

const Navigation = () => {
    const [value, setValue] = useState(0);

    return ( 
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' ,height:'600px'}}>
        
      
        
    
        <div>

      
        
  
    <Box sx={{ width: 0 }}>
      <BottomNavigation
       
      
      >
        {/* <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" /> */}
      </BottomNavigation>
    </Box>

  <ul style={{width:'400px',height:'60px',display:'flex',flexDirection:'row',marginLeft:'650px',marginTop:'-38px'}}>
    
    
            <Link style={{marginLeft:'30px'}} href='/Home' underline="none">Home</Link>
            <Link style={{marginLeft:'30px'}} href='/gallery' underline="none">Gallery</Link>
            <Link style={{marginLeft:'30px'}} href='/About' underline="none">About </Link>
            <Link style={{marginLeft:'30px'}} href='/Contact' underline="none">Contact</Link>
            <Link style={{marginLeft:'30px'}} href='/Blog' underline="none">Blog</Link>
            <Button>
             <userIcon />
            </Button>
           
  </ul>

  {/* <div style={{width:'400px',height:'60px',display:'flex',flexDirection:'row',marginLeft:'650px',marginTop:'-80px'}}> */}
        {/* <Icon>
          <SearchIcon />
          <ShoppingCartIcon />
          <PersonIcon />
        </Icon> */}
  
  {/* </div> */}

 
  <div className="icon-container"  style={{display: 'flex', justifyContent: 'center', width:'400px',height:'60px',flexDirection:'row',marginLeft:'990px',marginTop:'-80px'}}>
    

       <FontAwesomeIcon className="hoverable-icon" size="2x" icon={faUser} />
      <FontAwesomeIcon className="hoverable-icon" size="2x" icon={faSearch} />
      <FontAwesomeIcon className="hoverable-icon" size="2x" icon={faShoppingCart} />
    </div>

    <h2 style={{marginTop:'90px',marginLeft:'350px'}}>Lorem ipsum dolor sit amet, <br/>
        consectetur adipiscing elit, </h2>


        <button style={{width:'200px',height:'60px',marginLeft:'450px'}} >lorem ipsum</button>
  
        </div>
     </div>
     );
}
 
export default Navigation;