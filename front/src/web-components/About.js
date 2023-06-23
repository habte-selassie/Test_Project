import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';


const About = () => {
    const bull = (
        <Box
          component="span"
          sx={{ color:'black',display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 800,
        color: theme.palette.text.primary,
      }));


      const message = `About Lorem Ipsum `;

    return ( 
        <>
   

{/* <Grid container spacing={2} columns={16} sx={{height:'90px'}}>
  <Grid item xs={15} sx={{height:'90px'}}>
    <Item> <Typography noWrap>{message}</Typography></Item>
  </Grid>
 
</Grid> */}

<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>

      
         
         <Grid item xs>
           <Typography>{message}</Typography>
         </Grid>
       </Grid>

       <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >{message}</Box>

<Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >

Blockchain for business uses a shared and immutable ledger that can only be accessed by members with permission. Network members control what information each organization or member may see, and what actions each can take. Blockchain is sometimes called a “trustless” network — not because business partners don’t trust each other, but because they don’t have to.

This trust is built on blockchain’s enhanced security, greater transparency, and instant traceability. Beyond matters of trust, blockchain delivers even more business benefits, including the cost savings from increased speed, efficiency, and automation. By greatly reducing paperwork and errors, blockchain significantly reduces overhead and transaction costs, and reduces or eliminates the need for third parties or middlemen to verify transactions.
</Box>

        <Box sx={{ minWidth: 275,color:'black' ,marginLeft:'300px',width:'900px',height:'500px'}}>
        <Card sx={{color:'red', marginTop:'150px',backgroundColor:'white',marginLeft:'-300px',width:'500px',height:'300px'}}
         variant="outlined">{card}</Card>









         </Box>
        
      </StyledPaper>
     
      
     
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
          backgroundColor:'black'

        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
         
          <Grid item xs >
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
   

<div style={{display:'flex',justifyContent:'center'}}>
<Card sx={{ minWidth: 275, backgroundColor:'black',marginTop:'20px', width:'300px', marginLeft:'50px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275,color:'red' ,backgroundColor:'black',marginTop:'20px', width:'300px', marginLeft:'50px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275, backgroundColor:'black', marginTop:'20px', width:'300px', marginLeft:'50px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
      
        </>
     
     );
}
 
export default About;






