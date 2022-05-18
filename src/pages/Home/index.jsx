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
              <Typography gutterBottom variant="subtitle1" component="div">
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
          <ButtonBase sx={{ width: 200, height: 160 }}>
          <Typography fontWeight="medium" variant="h6" component="div" gutterBottom>
          Задействовано для высшей школы
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 160 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Получение всех писем в одной системе
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 160 }}>
          <Typography variant="h6" component="div" gutterBottom>
        Распределение писем по категориям
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 160 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Обратная связь студентов и преподавателей
      </Typography>
          </ButtonBase>
        </Paper>
      <Paper elevation={5} ><ButtonBase sx={{ width: 200, height: 160 }}>
          <Typography variant="h6" component="div" gutterBottom>
          Интуитивно понятный и ненагруженный интерфейс

      </Typography>
          </ButtonBase>
        </Paper>
      
     
    </Box>
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
//<img src="https://i.ibb.co/Z6vJwsT/im1.png" alt="im1" border="0" />
/*<Container maxWidth="lg" className={classes.root}>
      <Box  pt={10}></Box>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Typography  variant="h4" gutterBottom>
            Цифровой помощник преподавателя увеличит вам свободное время!
          </Typography>
          <Typography variant="body1" gutterBottom>
           Зарегитрируйтесь прямо сейчас, 
           чтобы начать экономить свое время.
          </Typography>
          
        </Grid>
        <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://i.ibb.co/Z6vJwsT/im1.png"
        alt="Live from space album cover"
      />
      </Grid>
       
     
    </Container>*/ 




    /*<Card    className={classes.root} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Цифровой помощник преподавателя увеличит вам свободное время!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Зарегитрируйтесь прямо сейчас, 
           чтобы начать экономить свое время.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button   component={Link} to="/registration"
              variant="contained"
              color="primary"
              type="submit"
              
            >
              Зарегистрироваться
            </Button>
            <Button  component={Link} to="/login"
              variant="contained"
              color="primary"
              type="submit"
              
            >
              Войти
            </Button>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://i.ibb.co/Z6vJwsT/im1.png"
        alt="Live from space album cover"
      />
    </Card>
     */