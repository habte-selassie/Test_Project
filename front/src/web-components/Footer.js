import './footer.css'
const Footer = () => {
    return ( 
<div>
<div class="input-with-button">
<p style={{marginLeft:'100px'}}>Subscribe to our weekly news letter</p>
  <input type="text" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</div>

          
<div style={{ display: 'flex', justifyContent: 'center',marginTop:'-135px' }}>
<ul style={{marginLeft:'300px',}}>
            <h3>Reach Us</h3>
            <li>Home</li>
            <li>Gallery</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>


            </ul>

            <ul  style={{marginLeft:'100px'}}>
            <h3>Be Social</h3>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Youtube Channel</li>
            {/* <li>Blog</li> */}
            </ul>

            <ul  style={{marginLeft:'100px'}}>
            <h3>Quick Links </h3>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
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