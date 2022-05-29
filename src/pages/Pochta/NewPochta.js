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
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import {indigo } from '@mui/material/colors';
import * as React from "react";
import Paper from "@material-ui/core/Paper";




const color = indigo[300];
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(1),
  },
  
  avatar:{
    
    backgroundColor: color,
    margin:"auto",
    
  },
  parentPaper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800}
}));

function NewPochta() {
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
      //отправка письма
      
      const { data: PismoData } = await api.auth.send(data);
      
      let user = {
        to: PismoData.to,
        subject: PismoData.subject,
        content: PismoData.content,
        
      }
      console.log(data);
      auth.setUser(user);
      alert( "Письмо отправлено!" );
      
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
  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);};
 
  return (
    <div><br /><br /><br /><br />
    <Paper elevation={7} className={classes.parentPaper}>
      <Box  pt={2}></Box>
      <Avatar className={classes.avatar}>
        <MarkAsUnreadIcon/>
        </Avatar><Box  pt={4}></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Обратная связь</Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Controller
              name="to"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.to?.message)}
                  fullWidth={true}
                  type="email"
                  label="Введите почту получателя"
                  variant="filled"
                  helperText={errors.to?.message}
                />
              )}
            />
          </Grid>

        <Grid item xs={12}>
            <Controller
              name="subject"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.subject?.message)}
                  fullWidth={true}
                  label="Введите тему письма"
                  variant="filled"
                  helperText={errors.subject?.message}
                />
               
              )}
            />
          </Grid>

          

          <Grid item xs={12}>
            <Controller
              name="content"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.content?.message)}
                  fullWidth={true}
                  label="Введите текст"
                  multiline
          rows={7}
                  variant="filled"
                  helperText={errors.content?.message}
                />
              )}
            />
          </Grid>

          

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
            >
              Отправить
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/pochta"
            >
              Отмена
            </Button>
          </Grid>
        </Grid>
      </form>
      </Paper></div>
  );
}

export default NewPochta;