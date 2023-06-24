import './footer.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const Footer = () => {
    return ( 
<div style={{marginTop:'-120px'}}>
<div class="input-with-button">
<p style={{marginLeft:'100px'}}>Subscribe to our weekly news letter</p>
  <input type="text" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</div>

          
<div style={{ display: 'flex', justifyContent: 'center',marginTop:'-135px' }}>
<ul style={{marginLeft:'300px',display:'flex',flexDirection:'column'}}>
            <h3 style={{marginLeft:'-1px'}}>Reach Us</h3>
            
            <Link href='/gallery' underline="none">Home</Link>
            <Link href='/gallery' underline="none">Gallery</Link>
            <Link href='/gallery' underline="none">About Us</Link>
            <Link href='/gallery' underline="none">Contact Us</Link>
            <Link href='/gallery' underline="none">Blog</Link>


            </ul>

            <ul style={{marginLeft:'100px',display:'flex',flexDirection:'column'}}>
            <h3 style={{marginLeft:'-1px'}}>Be Social</h3>
            <Link  href='https://www.facebook.com' underline="none">Facebook</Link>
            <Link  href='https://www.twitter.com' underline="none">Twitter</Link>
            <Link  href='https://www.linkedin.com' underline="none">Linkedin</Link>
            <Link  href='https://www.youtube.com' underline="none">Youtube Channel</Link>
            {/* <li>Blog</li> */}
            </ul>

            <ul style={{marginLeft:'100px',display:'flex',flexDirection:'column'}}>
            <h3 style={{marginLeft:'-5px'}}>Quick Links </h3>
            <Link  href='/gallery'underline="none">Link 1</Link>
            <Link  href='/gallery'underline="none">Link 2</Link>
            <Link  href='/gallery'underline="none">Link 3</Link>
            </ul>
</div>

<hr style={{marginTop:'60px'}}/>
<div style={{ textAlign: 'center' }}>
  <p>
    &copy; 2023 Rwanda, All Rights Reserved | <a href="/privacy-policy" style={{ textDecoration: 'none' }}>Privacy Policy</a>
  </p>
</div>


           
        </div>
     );
}
 
export default Footer;