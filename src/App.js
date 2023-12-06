import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
//import "./App.css";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import LoadingPersonsData from './OnLoadingPersonsData'
import { indigo } from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

 const color = indigo[400];
 const colorb = '#232323';
 const coloro = '#2F2F2F';

 const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  abRoot: {
    backgroundColor: coloro,
  },
  
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };
  
 
  


  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ 
    root: classes.abRoot
    
  }} >
        <Toolbar>
        <ButtonBase sx={{ width: 100, height:100 }}>
            <Img  src="https://ibb.org.ru/images/2023/12/05/3b1f78cc-d232-46ad-9602-f94f75e9ee98-transformed.png" />
          </ButtonBase><Button color="inherit" component={Link} to="/">
          <Typography variant="h6" className={classes.title}>
          
            ТИНОСТУДИЯ
            
          </Typography></Button>
          <div className={classes.rightToolbar}>
          
            <Button color="inherit" component={Link} to="/">
              
            </Button>
            

            
            
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
              <Button color="inherit" component={Link} to="/video">
              Видео
            </Button>
              
                <Button color="inherit" component={Link} to="/statistics">
                  {auth.user.firstName} {auth.user.lastName} Профиль
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Выход
                </Button>
                
              </>
            ) : (
              <>
              
                <Button color="inherit" component={Link} to="/login">
                  Вход
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Регистрация
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>
      <Routes />
      
    </div>
  );
}

export default App;
