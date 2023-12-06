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
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

/*background {{
  background: colorb
}}*/

function Home() {
  
  return (
    
    <div style={{backgroundColor: colorb}}   ><br /><br />
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
            <br /><br /><br /><br />
              <Typography gutterBottom variant="h2"color='#F2A548' component="div">
              Вдохновение 
              </Typography>
              <Typography gutterBottom variant="h2" color='#F7DC4E'component="div">
                Развлечение
              </Typography><Typography gutterBottom variant="h2" color='#FAFAFA' component="div">
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
          
          <Grid item>
          <ButtonBase sx={{ width: 700, height: 600 }}>
            <Img  src="https://ibb.org.ru/images/2023/12/05/SNIMOK-EKRANA-2023-12-05-20233593f8cf70abcdf4e8.jpg" />
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
           
          </Grid>
          
          <Grid item>
          <ButtonBase sx={{ width: 700, height: 600 }}>
            <Img  src="https://ibb.org.ru/images/2023/12/05/SNIMOK-EKRANA-2023-12-05-211655db0863a9e8e1047f.jpg" width={700} height={600} />
          </ButtonBase>
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
//variant="subtitle1"
export default Home;

