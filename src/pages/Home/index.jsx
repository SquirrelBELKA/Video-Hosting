import React from 'react';
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
import CssBaseline from '@material-ui/core/CssBaseline';

 
const colorr = red[300];
const colorg = grey[400];
const colori = indigo[400];
const colorb = '#232323';
const coloro = '#2F2F2F';


const colory = '#F2A548';
const coloror = '#F7DC4E';
const colorw = '#FAFAFA';


const Img = styled('img')({
  margin: 'auto',
 
  maxWidth: '100%',
  maxHeight: '100%',
});
const useStyles = makeStyles({
paper: {
  width: '100%',
  height: '100%',
  
},
root: {
  backgroundColor: colorb,
  height: '100vh',
},
});



function Home() {
  const classes = useStyles();
  return (
    
    <div style={{backgroundColor: colorb}}  height= '100vh'> <br /><br />
    

   
      
      <br /><br /> <CssBaseline />
    <Paper elevation={7}  
      sx={{ 
        p: 2.5,
        maxWidth:1200,
        width: "100%",
        
        height: '100%',
        margin: 'auto',
        
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
      <Grid container spacing={1} >
        <Grid item xs={12} sm={6} >
        
        
            <br /><br /><br /><br />
            <Grid item xs paddingLeft={2}  >
              <Typography gutterBottom variant="h2"color='#F2A548'  >
              Вдохновение 
              </Typography>
              <Typography gutterBottom variant="h2" color='#F7DC4E'>
                Развлечение
              </Typography><Typography gutterBottom variant="h2" color='#FAFAFA' >
                Сообщество 
              </Typography>
              
              <Typography variant="body1" color='#FAFAFA'>
              Взаимодействуй и общайся с единомышленниками.<div className="" />
              <n>Вдохновляйтесь и наслаждайтесь развлечениями. </n> 
              <div className="" />
              <n>Растем вместе.</n>
              </Typography><br />
              <Grid item >
            <Button   component={Link} to="/registration"
              variant="contained"
              type="submit" 
            >
              Зарегистрироваться
            </Button>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Grid item xs >
            <br /><br /><br /><br />
        <Img  src="https://ibb.org.ru/images/2023/12/05/SNIMOK-EKRANA-2023-12-05-20233593f8cf70abcdf4e8.jpg" />
        </Grid></Grid>
         <Grid item xs={12} sm={8}>
          </Grid></Grid>
          </Paper>


          <br /><br />
      <br /><br /> <CssBaseline />
    <Paper elevation={7}  
      sx={{ 
        p: 2.5,
        maxWidth:1200,
        width: "100%",
        
        height: '100%',
        margin: 'auto',
        
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
      <Grid container spacing={1} >
        <Grid item xs={12} sm={6} >
        
        
        <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h2" color='#F2A548' component="div">
                Публикуй и <n>комментируй</n>
              </Typography>
              <Grid item>
          <ButtonBase >
            <Img  src="https://ibb.org.ru/images/2023/12/05/SNIMOK-EKRANA-2023-12-05-21172165087efb6f755a5e.jpg" width={300} height={300} />
          </ButtonBase>
        </Grid>
        <br /><br />
              <Typography variant="h5" color='#F7DC4E'>
              Чем больше активность,<div className="" />
              <n>тем больше просмотры! </n> 
              
              </Typography>
            </Grid>
           
          </Grid></Grid>
           
          
        <Grid item xs={12} sm={6}>
        <Grid item>
          <ButtonBase>
            <Img  src="https://ibb.org.ru/images/2023/12/05/SNIMOK-EKRANA-2023-12-05-211655db0863a9e8e1047f.jpg" width={700} height={600} />
          </ButtonBase>
        </Grid></Grid></Grid>
          </Paper>


    <br />  <br /> <br /><br />  <br /> 

   





    
      
        <Paper elevation={8} 
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: '#232323',
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

export default Home;

