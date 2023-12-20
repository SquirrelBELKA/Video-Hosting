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
import VideoApp from "./Video3";
import ButtonBase from '@mui/material/ButtonBase';
//import validationSchema from "E:\Серебровский Front\Front\react-tutorial-real-app\src\pages\Registration\validation.js"
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

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


    

function Statistics() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const [cls, setCls] = useState("black");
  
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
   // resolver: yupResolver(validationSchema),
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
        userId: loginData.userId,
        overview: loginData.overview
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
    <div style={{backgroundColor: colorb}} > <br /><br /><br /><br />
    <style>{`
        .red {color: red}
        .black {color: black}
      `}</style>
    
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        
        margin: 'auto',
        maxWidth:500,
        flexGrow: 1,
        backgroundColor: 'colorw'
      }}
    >
    <Container maxWidth="xs" className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={12} align='center'>
    <Button component="label" >
             <AccountCircleIcon sx={{ width: 150, height: 150 }} />
            <VisuallyHiddenInput type="file" />
</Button>
    
    </Grid>
    </Grid>
            <br /><br />
    

      <Grid container spacing={3}>
      
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue="Name"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label="Имя канала"
                  variant="filled"
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="overview"
              control={control}
              defaultValue="Подпишись на мой канал." 
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.overview?.message)}
                  fullWidth={true}
                  label="Описание канала"
                  variant="filled"
                  helperText={errors.overview?.message}
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
                  label="Ваш Email"
                  variant="filled"
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
          <CardHeader 
          avatar={
            
          <IconButton > 
          <LockOpenIcon
          sx={{ color: colorb }} fontSize="large"
          />
        </IconButton>
        }
       
        title={<Typography  color='#FAFAFA'    >
        Тип канала:
        </Typography>}
        
        subheader={<Typography color='#FAFAFA' >
        Публичный
        </Typography>}
      />
          </Grid>
          
          <Grid item xs={12}>
          <CardHeader 
        avatar={
          <IconButton aria-label="share">
          <FavoriteIcon
           className={cls}
           onClick={() => setCls((cls) => (cls === "red" ? "black" : "red"))}
          sx={{ color: colorb }} fontSize="large"
          />
        </IconButton>
        }
       
        
        
        title={<Typography color='#FAFAFA' >
        Колличество сердечек:
        </Typography>}
        
        subheader={<Typography color='#FAFAFA' >
        12
        </Typography>}/>
          </Grid>

          <Grid item xs={12}>
          <CardHeader 
          avatar={
          <IconButton aria-label="share">
          <NotificationsOffIcon
          sx={{ color: colorb }} fontSize="large"
          />
        </IconButton>
        }
       
        title={<Typography color='#FAFAFA' >
        Уведомления:
        </Typography>}
        
        
        subheader={<Typography 
        color='#FAFAFA' >
        Выключены
        </Typography>}
      />
          </Grid>


          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} align="center"><br />
            <Button
              variant="contained"
              color="colorb"
              type="submit"
              disabled={isLoading}
              onClick={handleButtonClick}
            >
              Сохранить изменения 
            </Button>
            {showAlert && (
        <Alert variant="filled" severity="success" onClose={handleCloseAlert}>
          Сохранено!
        </Alert>
      )}
            </Grid>
            <Grid item xs={12} sm={6} align="center"><br />
            <Button
            
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/statistics"
            >
              Сбросить  данные быстро
            </Button>
          </Grid></Grid>
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

export default Statistics;




  

  
      
     
   