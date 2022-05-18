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
 

 const color = indigo[400];



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
    backgroundColor: color,
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
  
 
  

  //auth.isLoaded(true);
  //useEffect(() => { 

    //const tokenData=Cookies.get('auth-token');
    
    //dispatch(setAuthToken(tokenData));
  //}, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ 
    root: classes.abRoot
    
  }} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Цифровой помощник
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              Главная
            </Button>
            
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
              <Button color="inherit" component={Link} to="/pochta">
                Почта
                  </Button>
                <Button color="inherit" component={Link} to="/profile">
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
