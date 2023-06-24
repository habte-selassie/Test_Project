// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
// import axios from 'axios';

// const About = () => {
//   const [mission, setMission] = useState('');
//   const [vision, setVision] = useState('');
//   const [objectives, setObjectives] = useState([]);
//   const [editMission, setEditMission] = useState(false);
//   const [editVision, setEditVision] = useState(false);
//   const [editObjectives, setEditObjectives] = useState(false);
//   const [missionText, setMissionText] = useState('');
//   const [visionText, setVisionText] = useState('');
//   const [objectiveText, setObjectiveText] = useState('');

//   useEffect(() => {
//     // Fetch mission data
//     axios
//       .get('http://localhost:8000/api/mission/')
//       .then(response => {
//         setMission(response.data.title);
//       })
//       .catch(error => {
//         console.error('Error fetching mission data', error);
//       });

//     // Fetch vision data
//     axios
//       .get('http://localhost:8000/api/vision/')
//       .then(response => {
//         setVision(response.data.title);
//       })
//       .catch(error => {
//         console.error('Error fetching vision data:', error);
//       });

//     // Fetch objectives data
//     axios
//       .get('http://localhost:8000/api/objectives/')
//       .then(response => {
//         setObjectives(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching objectives data:', error);
//       });
//   }, []);

//   const StyledPaper = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     maxWidth: 800,
//     color: theme.palette.text.primary,
//   }));

//   const handleMissionEdit = () => {
//     setEditMission(true);
//   };

//   const handleVisionEdit = () => {
//     setEditVision(true);
//   };

//   const handleObjectivesEdit = () => {
//     setEditObjectives(true);
//   };

//   const handleMissionSave = () => {
//     axios
//       .put('http://localhost:8000/api/mission/', { title: missionText })
//       .then(response => {
//         setMission(response.data.title);
//         setEditMission(false);
//       })
//       .catch(error => {
//         console.error('Error updating mission data:', error);
//       });
//   };

//   const handleVisionSave = () => {
//     axios
//       .put('http://localhost:8000/api/vision/', { title: visionText })
//       .then(response => {
//         setVision(response.data.title);
//         setEditVision(false);
//       })
//       .catch(error => {
//         console.error('Error updating vision data:', error);
//       });
//   };

//   const handleObjectivesSave = () => {
//     // Assuming objectives are saved individually
//     axios
//       .put('http://localhost:8000/api/objectives/', { title: objectiveText })
//       .then(response => {
//         setObjectives([...objectives, response.data]);
//         setEditObjectives(false);
//       })
//       .catch(error => {
//         console.error('Error updating objectives data:', error);
//       });
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: '-100px' }}>
//         <StyledPaper sx={{ my: 1, mx: 'auto', p: 2, height: '460px', marginTop: '30px' }}>
//           <Grid container wrap="nowrap" spacing={2}>
//             <Grid item xs>
//               <img style={{ width: '900px', height: '210px', marginTop: '-80px', marginLeft: '-65px' }} src={require('.././web-components/assets/border-1.png')} alt="" />

//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{
//                   textDecoration: 'underline',
//                   textDecorationColor: 'yellowgreen',
//                   textDecorationStyle: 'solid',
//                   fontWeight: 'bold',
//                   color: 'yellowgreen',
//                   marginTop: '-40px',
//                 }}
//               >
//                 About Lorem Ipsum
//               </Typography>
//               <Typography variant="body2" sx={{ marginTop: '30px' }}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, felis at consectetur malesuada,
//                 odio erat volutpat enim, nec feugiat velit justo vel neque. Nulla dictum quam eu lacus tincidunt
//                 ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
//                 Mauris nec tellus eget mauris consequat lacinia. Nulla posuere nibh sit amet justo lacinia, eget
//                 aliquet elit vestibulum. Fusce suscipit ligula et dui varius varius. Sed ac dui faucibus, mollis erat
//                 nec, facilisis lectus. Sed lobortis consectetur quam, id pharetra dui malesuada non. Donec et nunc non
//                 massa iaculis suscipit ut ut lorem. Curabitur sit amet fermentum lectus.
//               </Typography>
//             </Grid>
//           </Grid>
//         </StyledPaper>
//       </Box>

//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
//           <CardContent>
//             <Typography
//               variant="h5"
//               component="div"
//               sx={{
//                 textDecoration: 'underline',
//                 textDecorationColor: 'yellowgreen',
//                 textDecorationStyle: 'solid',
//                 fontWeight: 'bold',
//                 color: 'yellowgreen',
//               }}
//             >
//               Mission
//             </Typography>
//             {!editMission ? (
//               <>
//                 <Typography variant="body2">{mission}</Typography>
//                 <Button variant="contained" onClick={handleMissionEdit} sx={{ marginTop: '10px' }}>
//                   Edit
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <TextField
//                   label="Mission Text"
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   value={missionText}
//                   onChange={e => setMissionText(e.target.value)}
//                   sx={{ marginBottom: '10px' }}
//                 />
//                 <Button variant="contained" onClick={handleMissionSave} sx={{ marginRight: '10px' }}>
//                   Save
//                 </Button>
//                 <Button variant="contained" onClick={() => setEditMission(false)}>
//                   Cancel
//                 </Button>
//               </>
//             )}
//           </CardContent>
//         </Card>

//         <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
//           <CardContent>
//             <Typography
//               variant="h5"
//               component="div"
//               sx={{
//                 textDecoration: 'underline',
//                 textDecorationColor: 'yellowgreen',
//                 textDecorationStyle: 'solid',
//                 fontWeight: 'bold',
//                 color: 'yellowgreen',
//               }}
//             >
//               Vision
//             </Typography>
//             {!editVision ? (
//               <>
//                 <Typography variant="body2">{vision}</Typography>
//                 <Button variant="contained" onClick={handleVisionEdit} sx={{ marginTop: '10px' }}>
//                   Edit
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <TextField
//                   label="Vision Text"
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   value={visionText}
//                   onChange={e => setVisionText(e.target.value)}
//                   sx={{ marginBottom: '10px' }}
//                 />
//                 <Button variant="contained" onClick={handleVisionSave} sx={{ marginRight: '10px' }}>
//                   Save
//                 </Button>
//                 <Button variant="contained" onClick={() => setEditVision(false)}>
//                   Cancel
//                 </Button>
//               </>
//             )}
//           </CardContent>
//         </Card>

//         <Card sx={{ minWidth: 275, backgroundColor: 'white', marginTop: '20px', width: '300px', marginLeft: '50px' }}>
//           <CardContent>
//             <Typography
//               variant="h5"
//               component="div"
//               sx={{
//                 textDecoration: 'underline',
//                 textDecorationColor: 'yellowgreen',
//                 textDecorationStyle: 'solid',
//                 fontWeight: 'bold',
//                 color: 'yellowgreen',
//               }}
//             >
//               Objectives
//             </Typography>
//             {!editObjectives ? (
//               <>
//                 {objectives.map(objective => (
//                   <Typography key={objective.id} variant="body2">
//                     {objective.title}
//                   </Typography>
//                 ))}
//                 <Button variant="contained" onClick={handleObjectivesEdit} sx={{ marginTop: '10px' }}>
//                   Add Objective
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <TextField
//                   label="Objective Text"
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   value={objectiveText}
//                   onChange={e => setObjectiveText(e.target.value)}
//                   sx={{ marginBottom: '10px' }}
//                 />
//                 <Button variant="contained" onClick={handleObjectivesSave} sx={{ marginRight: '10px' }}>
//                   Save
//                 </Button>
//                 <Button variant="contained" onClick={() => setEditObjectives(false)}>
//                   Cancel
//                 </Button>
//               </>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default About;










import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const About = () => {
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');
  const [objectives, setObjectives] = useState([]);
  
  const [editMission, setEditMission] = useState(false);
  const [missionText, setMissionText] = useState('');
  
  const [editVision, setEditVision] = useState(false);
  const [visionText, setVisionText] = useState('');
  
  const [editObjectives, setEditObjectives] = useState(false);
  const [objectivesText, setObjectivesText] = useState('');

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
        setObjectives(response.data);
      })
      .catch(error => {
        console.error('Error fetching objectives data:', error);
      });
  }, []);

  const handleMissionEdit = () => {
    setEditMission(true);
    setMissionText(mission);
  };

  const handleMissionSave = () => {
    axios
      .put('http://localhost:8000/api/mission/', { title: missionText })
      .then(response => {
        setMission(response.data.title);
        setEditMission(false);
      })
      .catch(error => {
        console.error('Error updating mission data:', error);
      });
  };

  const handleVisionEdit = () => {
    setEditVision(true);
    setVisionText(vision);
  };

  const handleVisionSave = () => {
    axios
      .put('http://localhost:8000/api/vision/', { title: visionText })
      .then(response => {
        setVision(response.data.title);
        setEditVision(false);
      })
      .catch(error => {
        console.error('Error updating vision data:', error);
      });
  };

  const handleObjectivesEdit = () => {
    setEditObjectives(true);
    setObjectivesText(objectives.map(item => item.title).join('\n'));
  };

  const handleObjectivesSave = () => {
    const updatedObjectives = objectivesText.split('\n').map((item, index) => ({ id: objectives[index].id, title: item }));
    axios
      .put('http://localhost:8000/api/objectives/', updatedObjectives)
      .then(response => {
        setObjectives(response.data);
        setEditObjectives(false);
      })
      .catch(error => {
        console.error('Error updating objectives data:', error);
      });
  };

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

Vestibulum et lobortis elit, sed bibendum turpis. Morbi pellentesque est quis dui dignissim, nec convallis risus ultrices.`;

  const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, felis at consectetur malesuada, odio erat volutpat enim, nec feugiat velit justo vel neque. Nulla dictum quam eu lacus tincidunt ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas `;

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, marginTop: '-100px' }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            height: '460px',
            marginTop: '30px',
          }}
        >
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
                {passage}
                <br />
                {'"a benevolent smile"'}
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
            {editMission ? (
              <>
                <TextField
                  label="Mission Text"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={missionText}
                  onChange={event => setMissionText(event.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <Button variant="contained" onClick={handleMissionSave}>
                  Save
                </Button>
              </>
            ) : (
              <Typography variant="body2">
                {mission}
                <Button variant="outlined" size="small" onClick={handleMissionEdit} sx={{ marginLeft: '10px' }}>
                  Edit
                </Button>
              </Typography>
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
            {editVision ? (
              <>
                <TextField
                  label="Vision Text"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={visionText}
                  onChange={event => setVisionText(event.target.value)}
                  sx={{ marginBottom: '10px' }}
                />
                <Button variant="contained" onClick={handleVisionSave}>
                  Save
                </Button>
              </>
            ) : (
              <Typography variant="body2">
                {vision}
                <Button variant="outlined" size="small" onClick={handleVisionEdit} sx={{ marginLeft: '10px' }}>
                  Edit
                </Button>
              </Typography>
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
            {editObjectives ? (
              <>
                <TextField
                  label="Objectives Text"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={objectivesText}
                  onChange={event => setObjectivesText(event.target.value)}
                  sx={{ marginBottom: '10px' }}
                > {objectives}</TextField>
                <Button variant="contained" onClick={handleObjectivesSave}>
                  Save
                </Button>
              </>
            ) : (
              <>
                {objectives.map((item, index) => (
                  <Typography key={item.id} variant="body2">
                    {item.title}
                  </Typography>
                ))}
                <Button variant="outlined" size="small" onClick={handleObjectivesEdit} sx={{ marginLeft: '10px' }}>
                  Edit
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

// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';

// const About = () => {
//   const [mission, setMission] = useState('');
//   const [vision, setVision] = useState('');
//   const [objectives, setObjectives] = useState([]);
//   const [editMission, setEditMission] = useState(false);
//   const [editVision, setEditVision] = useState(false);
//   const [editObjectives, setEditObjectives] = useState(false);

//   useEffect(() => {
//     // Fetch mission data
//     axios
//       .get('http://localhost:8000/api/mission/')
//       .then(response => {
//         setMission(response.data.title);
//       })
//       .catch(error => {
//         console.error('Error fetching mission data', error);
//       });

//     // Fetch vision data
//     axios
//       .get('http://localhost:8000/api/vision/')
//       .then(response => {
//         setVision(response.data.title);
//       })
//       .catch(error => {
//         console.error('Error fetching vision data:', error);
//       });

//     // Fetch objectives data
//     axios
//       .get('http://localhost:8000/api/objectives/')
//       .then(response => {
//         setObjectives(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching objectives data:', error);
//       });
//   }, []);

//   const handleMissionEdit = () => {
//     setEditMission(true);
//   };

//   const handleMissionSave = () => {
//     // Save mission data
//     axios
//       .put('http://localhost:8000/api/mission/', { title: mission })
//       .then(response => {
//         setEditMission(false);
//         console.log('Mission saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving mission data:', error);
//       });
//   };

//   const handleVisionEdit = () => {
//     setEditVision(true);
//   };

//   const handleVisionSave = () => {
//     // Save vision data
//     axios
//       .put('http://localhost:8000/api/vision/', { title: vision })
//       .then(response => {
//         setEditVision(false);
//         console.log('Vision saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving vision data:', error);
//       });
//   };

//   const handleObjectivesEdit = () => {
//     setEditObjectives(true);
//   };

//   const handleObjectivesSave = () => {
//     // Save objectives data
//     const updatedObjectives = objectives.map(item => ({ title: item.title }));

//     axios
//       .put('http://localhost:8000/api/objectives/', updatedObjectives)
//       .then(response => {
//         setEditObjectives(false);
//         console.log('Objectives saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving objectives data:', error);
//       });
//   };

//   return (
//     <div>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             About
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Mission"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={mission}
//                 onChange={event => setMission(event.target.value)}
//                 disabled={!editMission}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="outlined"
//                 onClick={editMission ? handleMissionSave : handleMissionEdit}
//               >
//                 {editMission ? 'Save Mission' : 'Edit Mission'}
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Vision"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={vision}
//                 onChange={event => setVision(event.target.value)}
//                 disabled={!editVision}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="outlined"
//                 onClick={editVision ? handleVisionSave : handleVisionEdit}
//               >
//                 {editVision ? 'Save Vision' : 'Edit Vision'}
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6" component="div">
//                 Objectives
//               </Typography>
//               {editObjectives ? (
//                 <TextField
//                   label="Objectives"
//                   multiline
//                   rows={4}
//                   fullWidth
//                   value={objectives.map(item => item.title).join('\n')}
//                   onChange={event =>
//                     setObjectives(
//                       event.target.value
//                         .split('\n')
//                         .map(title => ({ title }))
//                     )
//                   }
//                 />
//               ) : (
//                 <Typography variant="body1" component="div">
//                   {objectives.map((item, index) => (
//                     <div key={index}>{item.title}</div>
//                   ))}
//                 </Typography>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="outlined"
//                 onClick={
//                   editObjectives ? handleObjectivesSave : handleObjectivesEdit
//                 }
//               >
//                 {editObjectives ? 'Save Objectives' : 'Edit Objectives'}
//               </Button>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default About;
