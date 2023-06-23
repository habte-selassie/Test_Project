import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const Body = () => {
    return ( 
        <div>
 <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 328,
          height: 328,
        },
      }}
    >
    
    <div style={{marginLeft:'300px',width:'500px',height:'500px'}}>
    <Paper variant="outlined" style={{marginLeft:'100px',width:'500px',height:'300px'}}>
      <h3> Lorem ipsum dolor sit consectetur.</h3>

      <p>Mauris suscipit faucibus felis risus lectus platea neque ut.
       Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
      <Button variant="contained"  sx={{width:'200px',height:'60px',borderRadius:'29px'}}>Contained</Button>
      </Paper>
    </div>
     
    <div style={{marginLeft:'200px',width:'500px',height:'500px'}}>
    <Paper variant="outlined" square  >
      <h1> Lorem ipsum dolor sit consectetur.</h1>

<p>Mauris suscipit faucibus felis risus lectus platea neque ut.
 Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
<Button variant="contained" sx={{width:'200px',height:'60px',borderRadius:'29px'}}>Contained</Button>
      </Paper>
    </div> 
      
    </Box>
        </div>
     );
}
 
export default Body;