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

class Video extends Component { 
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
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              
              
             
            <VideoPlayer 
					controls={true} 
					src={this.state.video.src} 
					poster={this.state.video.poster} 
					width="850"
					height="480"
					onReady={this.onPlayerReady.bind(this)} 
				/> 
        <br /><br />
              
        <Grid item xs={12} sm container>
          
          <Grid item>
          <ButtonBase sx={{ width: 100, height: 100, margin: 'auto' }}>
            <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-142029.jpg" width={100} height={100} />
          </ButtonBase>
        </Grid>
              
          </Grid>
          

            </Grid>
                    </Grid>
          
          <Grid item>
          <ButtonBase sx={{ width: 300, height: 600 }}>
            <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-135359.jpg" width={250} height={600} />
          </ButtonBase>
        </Grid>
        
        </Grid>
      </Grid>
    </Paper>

    <br /><br />




    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
      <Grid container spacing={2}>
      
        <Grid item xs={12} sm container>
          
          <Grid item xs container direction="row" spacing={2}>
            <Grid item xs>
              
            <VideoPlayer 
					controls={true} 
					src={this.state.video.src} 
					poster={this.state.video.poster} 
					width="300"
					height="170"
					onReady={this.onPlayerReady.bind(this)} 
				/> 
        </Grid>
        <Grid item xs>
              
            <VideoPlayer 
					controls={true} 
					src={this.state.video.src} 
					poster={this.state.video.poster} 
					width="300"
					height="170"
					onReady={this.onPlayerReady.bind(this)} 
				/> 
        </Grid>
        <Grid item xs>
              
            <VideoPlayer 
					controls={true} 
					src={this.state.video.src} 
					poster={this.state.video.poster} 
					width="300"
					height="170"
					onReady={this.onPlayerReady.bind(this)} 
				/> 
        </Grid>
        
        
       
        
         </Grid>
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
export default Video;
