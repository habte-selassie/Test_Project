import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'





const About = () => {
      
     const [mission,setMission] = useState('')
     const [vision ,setVision] = useState('')
     const [objectives,setObjectives] = useState([])


     useEffect(()=>{
      ////////////// fetch mission data

      axios.get('http://localhost:8000/api/mission/')
      .then(response=>{
        setMission(response.data.title)
      })
      .catch(error=>{
        console.error('Error fetching mission data',error)
      })

      // Fetch vision data
    axios.get('http://localhost:8000/api/vision/')
    .then(response => {
      setVision(response.data.title);
    })
    .catch(error => {
      console.error('Error fetching vision data:', error);
    });

    axios.get('http://localhost:8000/api/objectives/')
    .then(response => {
      setObjectives(response.data);
    })
    .catch(error => {
      co

     })

    const bull = (
        <Box
          component="span"
          sx={{ color:'black',display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
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

const passage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, felis at consectetur malesuada, odio erat volutpat enim, nec feugiat velit justo vel neque. Nulla dictum quam eu lacus tincidunt ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec tellus eget mauris consequat lacinia. Nulla posuere nibh sit amet justo lacinia, eget aliquet elit vestibulum. Fusce suscipit ligula et dui varius varius. Sed ac dui faucibus, mollis erat nec, facilisis lectus. Sed lobortis consectetur quam, id pharetra dui malesuada non. Donec et nunc non massa iaculis suscipit ut ut lorem. Curabitur sit amet fermentum lectus.

Vestibulum et lobortis elit, sed bibendum turpis. Morbi pellentesque est quis dui dignissim, nec convallis risus ultrices. `
      const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, felis at consectetur malesuada, odio erat volutpat enim, nec feugiat velit justo vel neque. Nulla dictum quam eu lacus tincidunt ultrices. Pellentesque habitant morbi tristique
       senectus et netus et malesuada fames ac turpis egestas `;

    return ( 
        <>
   



<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3,marginTop:'-100px' }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
          height:'460px',
          marginTop:'30px'
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
 
      
         
         <Grid item xs>
         <img  style={{width:'900px',height:'210px',marginTop:'-80px',marginLeft:'-65px'}} src={require('.././web-components/assets/border-1.png')} alt=''/>

         <Typography variant="h5"
         component="div"
         sx={{
        textDecoration: 'underline',
        textDecorationColor: 'yellowgreen',
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'yellowgreen',
        marginTop:'-40px'
        
      }}>
        About Lorem Ipsum
        </Typography>       
        <Typography variant="body2"
        sx={{marginTop:'30px'}}>
         {passage}
          <br />
          {'"a benevolent smile"'}
        </Typography>
         </Grid>
       </Grid>

    
        
      </StyledPaper>
     
    
    </Box>
   

<div style={{display:'flex',justifyContent:'center'}}>

    <Card sx={{ minWidth: 275, backgroundColor:'white', marginTop:'20px', width:'300px', marginLeft:'50px' }}>
      <CardContent>      
        <Typography variant="h5"
         component="div"
         sx={{
        textDecoration: 'underline',
        textDecorationColor: 'yellowgreen',
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'yellowgreen',
      }}>
         Mission
        </Typography>       
        <Typography variant="body2">
         {message}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>     
    </Card>

    <Card sx={{ minWidth: 275, backgroundColor:'white', marginTop:'20px', width:'300px', marginLeft:'50px' }}>
      <CardContent>      
        <Typography variant="h5"
         component="div"
         sx={{
        textDecoration: 'underline',
        textDecorationColor: 'yellowgreen',
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'yellowgreen',
      }}>
         Vision
        </Typography>       
        <Typography variant="body2">
         {message}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>     
    </Card>

  <Card sx={{ minWidth: 275, backgroundColor:'white', marginTop:'20px', width:'300px', marginLeft:'50px' }}>
      <CardContent>      
        <Typography variant="h5"
         component="div"
         sx={{
        textDecoration: 'underline',
        textDecorationColor: 'yellowgreen',
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'yellowgreen',
      }}>
         Objectives
        </Typography>       
        <Typography variant="body2">
         {message}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>     
    </Card>

    

    
</div>
      
        </>
     
     );
}
 
export default About;






