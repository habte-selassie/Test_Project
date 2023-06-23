import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleRounded';

/* Rectangle 8 */



background: url(focused-coworkers-checking-reports.jpg);
border-radius: 8px 8px 0px 0px;

export default function Stories() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
<Card sx={{ maxWidth: 390,marginLeft:'10px',height:'350px',marginTop:'200px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.figma.com/file/UkT02TmzMu5xq4vZcUZjou/DEMO-HOME-PAGE-02?type=design&node-id=1-123&mode=design&t=QcJ5z5kAbAFD1uPV-4"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  sx={{marginTop:'210px',marginLeft:'-10px'}} size="small" color="primary">
         <AddIcon style={{ fontSize: '2.6rem' }}/>
        </Button>
      </CardActions>
    </Card>

    <Card  sx={{maxWidth: 390,marginLeft:'10px',height:'350px',marginTop:'200px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{marginTop:'210px',marginLeft:'-10px'}} size="small" color="primary">
         <AddIcon style={{ fontSize: '2.6rem' }} />
        </Button>
      </CardActions>
    </Card>


    <Card sx={{maxWidth: 390,marginLeft:'10px',height:'350px',marginTop:'200px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  sx={{marginTop:'210px',marginLeft:'-10px'}} size="small" color="primary">
         <AddIcon style={{ fontSize: '2.6rem' }}/>
        </Button>
      </CardActions>
    </Card>


    <button
        style={{ width: '150px', height: '60px', backgroundColor: 'green', borderRadius: '15px',marginTop:'530px', position:'fixed' ,marginLeft:'30px' }}
      >
        Lorem Ipsum
      </button>



    </div>
    
  );
}
