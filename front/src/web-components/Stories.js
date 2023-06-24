import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircleRounded";
import image1 from '../web-components/assets/foc.png'
import image2 from '../web-components/assets/loan.png'
import image3 from '../web-components/assets/afr.jpg'


export default function Stories() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

    <h2 style={{position:'absolute',marginLeft:'-690px',marginTop:'60px'}}>LATEST STORIES AND 
UPDATES</h2>
      <Card
        sx={{
          maxWidth: 390,
          marginLeft: "10px",
          height: "420px",
          marginTop: "119px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image1}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ marginTop: "300px", marginLeft: "-28px" }}
            size="small"
            color="primary"
          >
            <AddIcon style={{ fontSize: "2.6rem" }} />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 390,
          marginLeft: "10px",
          height: "420px",
          marginTop: "119px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image2}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
          sx={{ marginTop: "300px", marginLeft: "-28px" }}
            size="small"
            color="primary"
          >
            <AddIcon style={{ fontSize: "2.6rem" }} />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 390,
          marginLeft: "10px",
          height: "420px",
          marginTop: "119px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image3}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ marginTop: "300px", marginLeft: "-28px" }}
            size="small"
            color="primary"
          >
            <AddIcon style={{ fontSize: "2.6rem" }} />
          </Button>
        </CardActions>
      </Card>

      <button
        style={{
          width: "150px",
          height: "60px",
          backgroundColor:'yellowgreen',
          borderRadius: "15px",
          marginTop: "550px",
          position: "fixed",
          marginLeft: "30px",
        }}
      >
        Lorem Ipsum
      </button>
    </div>
  );
}
