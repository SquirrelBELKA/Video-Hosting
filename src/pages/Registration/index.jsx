import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {indigo } from '@mui/material/colors';
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

const color = indigo[300];
const colorb = '#232323';
const colorw = '#FAFAFA';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
  
  avatar:{
    
    backgroundColor: color,
    margin:theme.spacing(1,21.5,1),
    
  },
}));

function Registration() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
 //обработчик формы
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      //регистрция и логин
      await api.auth.registration(data);
      let userLogin = {
        username: data.email,
        password: data.password
      }
      const { data: loginData } = await api.auth.login(userLogin);

      let user = {
        email: loginData.email,
        firstName: loginData.firstName,
        lastName: loginData.lastName,
        userId: loginData.userId
      }

      auth.setToken(loginData.accessToken);
      auth.setUser(user);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{backgroundColor: colorb}}> <br /><br /><br /><br />
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:500,
        flexGrow: 1,
        backgroundColor: colorw
      }}
    >
    <Container maxWidth="xs" className={classes.root}>
    <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-114326.jpg" />
            <br /><br />
    

      <Grid container spacing={3}>
        
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label="Введите ваше имя"
                  variant="filled"
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.lastName?.message)}
                  fullWidth={true}
                  label="Введите вашу фамилию"
                  variant="filled"
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.email?.message)}
                  fullWidth={true}
                  type="email"
                  label="Введите ваш Email"
                  variant="filled"
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.password?.message)}
                  type="password"
                  fullWidth={true}
                  label="Введите новый пароль"
                  variant="filled"
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}><br />
            <Button
              variant="contained"
              color="colorb"
              type="submit"
              disabled={isLoading}
            >
              Регистрация
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/login"
            >
              Вы уже зарегистрированны?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container></Paper><br /><br /><br /><br /><br />
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
     </footer></div>
  );
}

export default Registration;
