import React, { Component } from 'react'; 
import { makeStyles, Container,  Button } from "@material-ui/core";

import { Link, useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { red, grey, indigo } from '@mui/material/colors';
import VideoPlayer from 'react-video-js-player'; 




const coloro = '#2F2F2F';


const colory = '#F2A548';
const coloror = '#F7DC4E';
const colorw = '#FAFAFA';

const colorr = red[300];
const colorg = grey[400];
const colori = indigo[400];
const colorb = '#232323';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


class Statistics extends Component { 
	player = {} 
	state = { 
		video: { 
			src: "/video.mp4", 
			poster: "/1.png"
		} 
	} 

	onPlayerReady(player){ 
		this.player = player; 
    
	} 
  

  
	render() { 
    
		return ( 
			 

<div style={{backgroundColor: colorb}}   ><br /><br />
    
    <br /><br />
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:800,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    ><br /><br />
      <Grid container spacing={2}>
      
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
          <Grid item>
          <ButtonBase sx={{ width: 350, height: 350, margin: 'auto' }}>
            <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-142029.jpg" width={350} height={350} />
          </ButtonBase>
        </Grid>
              
          </Grid>
           <Grid item>
           <br /><br /><br /><br /><br />
           
              <Typography gutterBottom variant="h4"color='#F2A548' component="div">
              Имя:
              
              </Typography>
              <Typography gutterBottom variant="h4" color='#F7DC4E'component="div">
               Возраст: 
              </Typography><Typography gutterBottom variant="h4" color='#FAFAFA' component="div">
                Статус: активный блогер      
              </Typography>
          </Grid>
        </Grid>
      </Grid>
      <br /><br />
      <Grid item xs={12} sm container>
         <Grid item>
          <ButtonBase sx={{ width: 800, height: 200 }}>
            <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-142042.jpg" width={800} height={200} />
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>

   
      <br /><br />
      
    <br />  <br /> <br /><br />  <br /> 

        <Paper elevation={8}
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: 'write',
      }}
    >
      
      
      
    </Paper>
    <footer><Paper elevation={8}
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: colorb,
      }}
    >
      
     <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto', textAlign: 'center'  }}>
     <br /> <br /><Typography variant="h6"  gutterBottom>
      ТИНОСТУДИЯ 2023 (видео-хостинг) | Made by <a href="https://github.com/SquirrelBELKA"   > SquirrelBELKA</a> 
            
      </Typography><br /> 
     </Box></Paper>
     </footer>
      			</div> 
		); 
	} 
} 
export default Statistics;
/*<Typography gutterBottom variant="h4"color='#F2A548' component="div">
              Имя: {auth.user.firstName} {auth.user.lastName} 
              
              </Typography>*/