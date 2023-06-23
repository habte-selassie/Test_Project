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
    
      <Paper variant="outlined">
      <h1> Lorem ipsum dolor sit consectetur.</h1>

      <p>Mauris suscipit faucibus felis risus lectus platea neque ut.
       Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
      <Button variant="contained">Contained</Button>
      </Paper>
     
      <Paper variant="outlined" square >
      <h1> Lorem ipsum dolor sit consectetur.</h1>

<p>Mauris suscipit faucibus felis risus lectus platea neque ut.
 Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
<Button variant="contained">Contained</Button>
      </Paper>
    </Box>
        </div>
     );
}
 
export default Body;