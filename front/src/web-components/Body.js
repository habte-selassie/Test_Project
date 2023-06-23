import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const Body = () => {
    return ( 
        <div style={{backgroundColor:'grey'}}>
        <img src={require('.././web-components/assets/border-1.png')} alt=''/>
 <Box
      sx={{
        display: 'flex',      
        '& > :not(style)': {
          m: 1,
          width: 328,
          backgroundColor:'grey',
          height: 328,
        },
      }}
    >
    
    <div style={{marginLeft:'150px',width:'390px',height:'500px',marginTop:'200px',backgroundColor:'grey'}}>
    <Paper variant="outlined" style={{marginLeft:'10px',width:'500px',height:'300px',border:'1px solid grey',backgroundColor:'gray'}}>
      <h3> Lorem ipsum dolor sit consectetur.</h3>

      <p style={{marginTop:'30px'}}>Mauris suscipit faucibus felis risus lectus platea neque ut.
       Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
      <Button variant="contained"  sx={{backgroundColor:'yellowgreen',width:'200px', marginTop:'100px',height:'60px',borderRadius:'29px'}}>lorem ipsum</Button>
      </Paper>
    </div>
     
    <div style={{marginLeft:'100px',width:'390px',height:'500px',marginTop:'200px',backgroundColor:'grey'}}>
    <Paper variant="outlined" style={{marginLeft:'60px',width:'500px',height:'300px',border:'1px solid grey',backgroundColor:'gray'}}>
      <h3> Lorem ipsum dolor sit consectetur.</h3>

      <p style={{marginTop:'30px'}}>Mauris suscipit faucibus felis risus lectus platea neque ut.
       Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
      <Button variant="contained"  sx={{backgroundColor:'black',width:'200px', marginTop:'100px',height:'60px',borderRadius:'29px'}}>lorem ipsum</Button>
      </Paper>
    </div>
      
    </Box>
    <img src={require('.././web-components/assets/border-1.png')} alt=''/>
        </div>
     );
}
 
export default Body;