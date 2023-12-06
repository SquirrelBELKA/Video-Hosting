import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
  FormHelperText,
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
import { red,indigo } from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
 

const color = indigo[400];
const color2 = red[300];
const colorb = '#232323';
const colorw = '#FAFAFA';
const colorbbl = '#212121';


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
    
    backgroundColor: color2,
    margin:theme.spacing(1,21.5,1),
    
  },
  buttonroot:{
    
    backgroundColor: color,
    
    
  },
  
  
  

}));

function Login() {
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
  //обработчик формы(с данными в форме)
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      //отправка данных из формы с данными
      const { data: loginData } = await api.auth.login(data);

      let user = {
        email: loginData.email,
        firstName: loginData.firstName,
        lastName: loginData.lastName,
        userId: loginData.userId
      }
      //нам возвращают токен и данные о пользователе для авторизации
      auth.setToken(loginData.accessToken);
      auth.setUser(user);
    } catch (e) {
      if (e.response.status === 404) { alert( "Проверьте ваш логин или пароль!" );
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
    <div style={{backgroundColor: colorb}}> <br /><br /><br /><br /><br /><br /><br /><br />


<Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:500,
        flexGrow: 1,
        backgroundColor: colorw
      }}
    >
      
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
           
            <Container maxWidth="xs" className={classes.root}>
      
            
          
            <Img  src="https://ibb.org.ru/images/2023/12/06/SNIMOK-EKRANA-2023-12-06-114908.jpg" />
            <br /><br />
        
        
      <Grid container  spacing={3}  >
        
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.email?.message)}
                  fullWidth={true}
                  type="email"
                  label="Почта"
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
                  label="Пароль"
                  variant="filled"
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}><br />
            <Button  
              variant="contained"
              color="colorbbl"
              type="submit"
              disabled={isLoading}
            >
              Войти
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/registration"
            >
              Регистрация
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
              

            
          </Grid>
          
         
        </Grid>
      </Grid>
    </Paper>

    <Container maxWidth="xs" className={classes.root}>
      <Box  pt={10}></Box>
      
        
      <Grid container  spacing={3}  >
        <Grid item xs={6}>
        
          
          </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
           
          </Grid>

          <Grid item xs={12}>
            
            
          </Grid>
          <Grid item xs={12}>
            
            
          </Grid>
        </Grid>
      </form>
    </Container><br /><br /><br /><br /><br />
    
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

export default Login;
