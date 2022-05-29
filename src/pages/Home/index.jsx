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
import { grey, indigo } from '@mui/material/colors';
 

 

const colorg = grey[400];
const colori = indigo[400];


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function Home() {
  return (
    <div   ><br /><br />
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                Добро пожаловать!
              </Typography>
              <Typography variant="h5" gutterBottom>
              Цифровой помощник преподавателя увеличит вам свободное время!
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Зарегитрируйтесь прямо сейчас, 
           чтобы начать экономить свое время.
              </Typography>
            </Grid>
            <Grid item>
            <Button   component={Link} to="/registration"
              variant="contained"
              color="primary"
              type="submit"
              
            >
              Зарегистрироваться
            </Button>
            </Grid>
          </Grid>
          
          <Grid item>
          <ButtonBase sx={{ width: 160, height: 160 }}>
            <Img  src="https://i.ibb.co/Z6vJwsT/im1.png" />
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
        maxWidth:800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={5}>
             


            <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <Img  src="https://i.ibb.co/r2YVKqB/sm2.png" />
          </ButtonBase>
         </Grid>
          </Grid>
          
          <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                Удобство приложения.
              </Typography>
              <Typography variant="body2" gutterBottom>
              В настоящее время работа преподавателя тесно связана с информационными технологиями, в частности, с необходимостью осуществлять коммуникативные функции со студентами через программные средства в сети интернет во время дистанционного обучения.

              </Typography>
              <Typography variant="body2" color="text.secondary">
              Преподаватели ввиду нагруженности забывают про письма на разных почтовых платформах и не отвечают студентам
              </Typography>
            </Grid> 
            <Grid item xs>
              <Typography gutterBottom variant="body2" component="div">
              Мы создали приложение, которое поможет преподавателям ответить на все письма, не пропустив ни одного.
              </Typography>
              <Typography variant="body2" gutterBottom>
              Наша CRM - система имеет общую платформу для двух сторон(преподавателей, студентов). Только наша CRM- система подходит для высшей школы(других аналогов в настоящий момент не существует).

              </Typography>
              
            </Grid> 
          
        </Grid>
      </Grid>
    </Paper>


    <br />  <br /> <br />

    <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto', textAlign: 'center'  }}>
      <Typography variant="h5" component="div" gutterBottom>
        Наши преимущества
      </Typography>
      
        </Box>
       
        <br />
    <Box 
      sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          p: 2.5,
          
        
          
          maxWidth:200,
          flexGrow: 1,
          margin: 'auto',
         
        },
      }}
    > 
     
      
      <Paper elevation={5} >
          <ButtonBase sx={{ width: 200, height: 150 }}>
          <Typography fontWeight="medium" variant="h6" component="div" gutterBottom>
          Задействовано для высшей школы
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 150 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Получение всех писем в одной системе
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 150 }}>
          <Typography variant="h6" component="div" gutterBottom>
        Распределение писем по категориям
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 150 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Обратная связь студентов и преподавателей
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 150 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Интуитивно понятный и ненагруженный интерфейс

      </Typography>
          </ButtonBase>
        </Paper>
      
     
    </Box><br />  <br /> <br /><br /> <br />
       
    
      
        <Paper elevation={8}
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: 'write',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                Цифровой помощник преподавателя
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Российская Федерация, г. Курск, <br/> 50 лет Октября ул., 94,<br/>Юго-Западный Государственный Университет.
              </Typography>
            </Grid>
          </Grid><Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
              Контакты.
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Email: izabella00arhipova@mail.ru
              </Typography>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            
          </ButtonBase>
         </Grid>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            <Img  src="https://i.ibb.co/W2vtkk9/2022-05-20-204215.png" />
          </ButtonBase>
         </Grid>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            <Img  src="https://i.ibb.co/FWKS2Df/2022-05-20-205019.png" />
          </ButtonBase>
         </Grid>
            </Grid> 
        </Grid>
      </Grid>
      
      
    </Paper>
    <footer><Paper elevation={8}
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: 'write',
      }}
    >
      
     <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto', textAlign: 'center'  }}>
     <br /> <br /><Typography variant="h6"  gutterBottom>
      Цифровой помощник преподавателя 2022 | Made by
            <a href="https://github.com/SquirrelBELKA" > SquirrelBELKA</a> и
            <a href=" https://github.com/evg-bogatikov" > Evg </a>
      </Typography><br /> 
     </Box></Paper>
     </footer>
      
    
     
    
    
     
    </div>
    
    
  );
}
//variant="subtitle1"
export default Home;

//elevation={0}
/*<CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />*/ 

      /*<Paper elevation={0}
      sx={{ 
        pl:5,
        
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                Цифровой помощник преподавателя
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Российская Федерация, г. Курск, <br/> 50 лет Октября ул., 94,<br/>Юго-Западный Государственный Университет.
              </Typography>
            </Grid>
          </Grid><Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
              Контакты.
              </Typography>
              <Typography variant="body2" gutterBottom>
              Email: izabella00arhipova@mail.ru
              </Typography>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            
          </ButtonBase>
         </Grid>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            <Img  src="https://i.ibb.co/W2vtkk9/2022-05-20-204215.png" />
          </ButtonBase>
         </Grid>
            </Grid> 
            <Grid item xs>
            <Grid item>
          <ButtonBase sx={{ width: 100, height:100 }}>
            <Img  src="https://i.ibb.co/FWKS2Df/2022-05-20-205019.png" />
          </ButtonBase>
         </Grid>
            </Grid> 
          
          
        </Grid>
      </Grid>
    </Paper>
      
     
    <footer className="bg-white sticky-top">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Цифровой помощник преподавателя 2022 | Made by
            <a href="https://github.com/SquirrelBELKA" > SquirrelBELKA</a> и
            <a href=" https://github.com/evg-bogatikov" > Дед </a></span></div>
                </div>
            </footer> */