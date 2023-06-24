import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionArea} from "@mui/material";
import image4 from '../web-components/assets/cr7.png'
import image5 from '../web-components/assets/drogba.jpeg'
import image6 from '../web-components/assets/sales.jpeg'

import AddIcon from "@mui/icons-material/AddCircleRounded";

const Advertisment = () => {
    return ( 
    <div style={{ display: "flex", justifyContent: "center" }}>
    <h2 style={{position:'absolute',marginLeft:'-690px',marginTop:'60px'}}>Tellus erat aliquam blandit etiam</h2>
      <Card sx={{ maxWidth: 390,marginLeft: "10px",
          height: "420px",
          marginTop: "119px", }}>
      <CardMedia component="img" height="100%" image={image4} alt="" />
    </Card>

    <Card sx={{ maxWidth: 390,marginLeft: "10px",
          height: "420px",
          marginTop: "119px", }}>
      <CardMedia component="img" height="100%" image={image5} alt="" />
    </Card>

    <Card sx={{ maxWidth: 390,marginLeft: "10px",
          height: "420px",
          marginTop: "119px", }}>
      <CardMedia component="img" height="100%" image={image6} alt="" />
    </Card>
    </div>
     );
}
 
export default Advertisment;