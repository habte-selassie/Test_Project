import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const About = () => {
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');
  const [objective, setObjective] = useState('');
  const [editMission, setEditMission] = useState(false);
  const [editVision, setEditVision] = useState(false);
  const [editObjective, setEditObjective] = useState(false);
  const [missionText, setMissionText] = useState(' Hello My Name Is Habte Selassie Fitsum');
  const [visionText, setVisionText] = useState('Hello My Name Is Habte Selassie Fitsum');
  const [objectiveText, setObjectiveText] = useState('Hello My Name Is Habte Selassie Fitsum');

  useEffect(() => {
    // Fetch mission data
    axios
      .get('http://localhost:8000/api/mission/')
      .then(response => {
        setMission(response.data.title);
      })
      .catch(error => {
        console.error('Error fetching mission data', error);
      });

    // Fetch vision data
    axios
      .get('http://localhost:8000/api/vision/')
      .then(response => {
        setVision(response.data.title);
      })
      .catch(error => {
        console.error('Error fetching vision data:', error);
      });

    // Fetch objectives data
    axios
      .get('http://localhost:8000/api/objectives/')
      .then(response => {
        setObjective(response.data);
      })
      .catch(error => {
        console.error('Error fetching objectives data:', error);
      });
  }, []);

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 800,
    color: theme.palette.text.primary,
  }));

  const handleMissionSave = () => {
    // Make an API call to save the mission
    axios
      .post('http://localhost:8000/api/mission/update/', {
        mission_id: mission.id,
        title: missionText,
        description: mission.description
      })
      .then(response => {
        setMission(response.data.title);
        // setEditMission(false);
      })
      .catch(error => {
        console.error('Error updating mission data:', error);
      });
      //setMission(response.data.title);
      // setEditMission(false);
      // setMissionText(e.target.value);
      setEditMission(false);
  };
  
  const handleMissionDelete = () => {
    // Make an API call to delete the mission
    axios
      .post('http://localhost:8000/api/mission/delete/', {
        mission_id: mission.id
      })
      .then(() => {
        setMission('');
        setEditMission(false);
      })
      .catch(error => {
        console.error('Error deleting mission data:', error);
      });
      setMissionText('')

      // setEditMission(false);
  };
  
  const handleMissionEdit = () => {
    setEditMission(true);
  };
  

const handleMissionCancel = () =>{
  setEditMission(false);
  setMissionText('')
}

const handleVisionSave = () => {
  // Make an API call to save the vision
  axios
    .post('http://localhost:8000/api/vision/update/', {
      vision_id: vision.id,
      title: visionText,
      description: vision.description
    })
    .then(response => {
      setVision(response.data.title);
      setEditVision(false);
    })
    .catch(error => {
      console.error('Error updating vision data:', error);
    });
    setEditVision(false)
};

const handleVisionDelete = () => {
  // Make an API call to delete the vision
  axios
    .post('http://localhost:8000/api/vision/delete/', {
      vision_id: vision.id
    })
    .then(() => {
      setVision('');
      setEditVision(false);
    })
    .catch(error => {
      console.error('Error deleting vision data:', error);
    });
  setVisionText('');
};

const handleVisionEdit = () => {
  setEditVision(true);
};

const handleVisionCancel = () => {
  setEditVision(false);
  setVisionText('');
};

const handleObjectiveSave = () => {
  // Make an API call to save the objective
  axios
    .post('http://localhost:8000/api/objective/update/', {
      objective_id: objective.id,
      title: objectiveText,
      description: objective.description
    })
    .then(response => {
      setObjective(response.data.title);
      setEditObjective(false);
    })
    .catch(error => {
      console.error('Error updating objective data:', error);
    });
    setEditObjective(false)
};

const handleObjectiveDelete = () => {
  // Make an API call to delete the objective
  axios
    .post('http://localhost:8000/api/objective/delete/', {
      objective_id: objective.id
    })
    .then(() => {
      setObjective('');
      setEditObjective(false);
    })
    .catch(error => {
      console.error('Error deleting objective data:', error);
    });
  setObjectiveText('');
};

const handleObjectiveEdit = () => {
  setEditObjective(true);
};

const handleObjectiveCancel = () => {
  setEditObjective(false);
  setObjectiveText('');
};

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: '-100px' }}>
        <StyledPaper sx={{ my: 1, mx: 'auto', p: 2, height: '460px', marginTop: '30px' }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <img
                style={{ width: '900px', height: '210px', marginTop: '-80px', marginLeft: '-65px' }}
                src={require('.././web-components/assets/border-1.png')}
                alt=""
              />

              <Typography
                variant="h5"
                component="div"
                sx={{
                  textDecoration: 'underline',
                  textDecorationColor: 'yellowgreen',
                  textDecorationStyle: 'solid',
                  fontWeight: 'bold',
                  color: 'yellowgreen',
                  marginTop: '-40px',
                }}
              >
                About Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '30px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, felis at consectetur malesuada,
                odio erat volutpat enim, nec feugiat velit justo vel neque. Nulla dictum quam eu lacus tincidunt
                ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Mauris nec tellus eget mauris consequat lacinia. Nulla posuere nibh sit amet justo lacinia, eget
                aliquet elit vestibulum. Fusce suscipit ligula et dui varius varius. Sed ac dui faucibus, mollis erat
                nec, facilisis lectus. Sed lobortis consectetur quam, id pharetra dui malesuada non. Donec et nunc non
                massa iaculis suscipit ut ut lorem. Curabitur sit amet fermentum lectus.
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: 'yellowgreen',
                textDecorationStyle: 'solid',
                fontWeight: 'bold',
                color: 'yellowgreen',
              }}
            >
              Mission
            </Typography>

            {missionText}
                {/* Hello My Name Is Habte Selassie Fitsum */}
            <Typography>

            </Typography>
            {!editMission ? (
              <>
                <Typography variant="body2">{mission}</Typography>
               
                <Button variant="contained" onClick={handleMissionEdit} sx={{ marginTop: '10px', marginRight: '5px',width:'10px' }}>
                  Edit
                </Button>
                <Button variant="contained" onClick={handleMissionDelete} sx={{ marginTop: '10px',width:'10px' }}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <TextField
                  label="Mission Text"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={missionText}
                  onChange={e => setMissionText(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                
                <Button variant="contained" onClick={handleMissionSave} sx={{ marginRight: '10px' }}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleMissionCancel}>
                  Cancel
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: 'yellowgreen',
                textDecorationStyle: 'solid',
                fontWeight: 'bold',
                color: 'yellowgreen',
              }}
            >
              Vision
            </Typography>

            {visionText}
                {/* Hello My Name Is Habte Selassie Fitsum */}
            <Typography>

            </Typography>
            {!editVision ? (
              <>
                <Typography variant="body2">{vision}</Typography>
               
                <Button variant="contained" onClick={handleVisionEdit} sx={{ marginTop: '10px', marginRight: '5px',width:'10px' }}>
                  Edit
                </Button>
                <Button variant="contained" onClick={handleVisionDelete} sx={{ marginTop: '10px',width:'10px' }}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <TextField
                  label="Vision Text"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={visionText}
                  onChange={e => setVisionText(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                
                <Button variant="contained" onClick={handleVisionSave} sx={{ marginRight: '10px' }}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleVisionCancel}>
                  Cancel
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: 'yellowgreen',
                textDecorationStyle: 'solid',
                fontWeight: 'bold',
                color: 'yellowgreen',
              }}
            >
              Objectives
            </Typography>
            {objectiveText}
                {/* Hello My Name Is Habte Selassie Fitsum */}
            <Typography>
            </Typography>
            {!editObjective ? (
              <>
                <Typography variant="body2">{objective}</Typography>
               
                <Button variant="contained" onClick={handleObjectiveEdit} sx={{ marginTop: '10px', marginRight: '5px',width:'10px' }}>
                  Edit
                </Button>
                <Button variant="contained" onClick={handleObjectiveDelete} sx={{ marginTop: '10px',width:'10px' }}>
                  Delete
                </Button>
              </>
            ) : (
              <>
                <TextField
                  label="Objective Text"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={objectiveText}
                  onChange={e => setObjectiveText(e.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                
                <Button variant="contained" onClick={handleObjectiveSave} sx={{ marginRight: '10px' }}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleObjectiveCancel}>
                  Cancel
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default About;
