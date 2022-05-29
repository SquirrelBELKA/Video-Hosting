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
import { Link, useParams } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import {indigo } from '@mui/material/colors';
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie"

const color = indigo[300];
const useStyles = makeStyles((theme) => ({
  
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

function Podrobnee(props) {
  const classes = useStyles();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const { id } = useParams()

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    
  };

  const loadData = useCallback(async () => {
    const { data } = await api.auth.getProfile();
    const message = await axios.get("/api/v1/message/" + id,
    {
      headers:{
        Authorization: "Bearer " + Cookies.get("auth-token")
      }
    })

    console.log(message.data)
    reset({
      email: data.email,
    });
  }, [reset]);

  useEffect(() => {
    loadData();
  }, [loadData]);
 
  return ( <div><br /><br /><br /><br />
    <Paper elevation={7} className={classes.parentPaper}>
    
      <Box  pt={2}></Box>
      <Avatar className={classes.avatar}>
        <MarkAsUnreadIcon/>
        </Avatar>
        <Box  pt={4}></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Подробнее</Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Grid item xs container direction="row" spacing={1}>
          <Grid item xs={6}>
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
                  label="Тема письма"
                  variant="filled"
                  helperText={errors.to?.message}
                />
              )}
            />    
             </Grid>
             <Grid item xs={6}>
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
                  label="Тип мессенджера"
                  variant="filled"
                  helperText={errors.to?.message}
                />
              )}
            />    
            </Grid>
             
           </Grid>
          
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
                  label="Имя отправителя"
                  variant="filled"
                  helperText={errors.subject?.message}
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
                  label="Получатель"
                  variant="filled"
                  helperText={errors.email?.message}
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
                  label="Текст"
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
              className={classes.buttonSpacing}
              component={Link}
              to="/newpochta"
            >
              Написать ответ
            </Button>
            <Button
              color="inherit"
              type="submit"
              className={classes.buttonSpacing}
              component={Link}
              to="/pochta"
            >
              Назад
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper></div>
  );
}

export default  Podrobnee;