import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Profile() {
  const classes = useStyles();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      setIsLoading(true);
      const { data: user } = await api.auth.updateProfile(data);
      
      
      
      

      auth.setUser(user);
      setIsOpen(true);
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

  const loadData = useCallback(async () => {
    const { data } = await api.auth.getProfile();

    reset({
      email: data.email,
      emailpassword: data.appPassword,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }, [reset]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Box  pt={3}></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Данные пользователя</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
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
                  label="Логин"
                  variant="filled"
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="emailpassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.emailpassword?.message)}
                  fullWidth={true}
                  label="Введите пароль от почты"
                  variant="filled"
                  helperText={errors.emailpassword?.message}
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
              Сохранить
            </Button> 
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message="Profile updated successfully"
        
      /> 
   <Box  pt={6}></Box>
  

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Обновить профиль</Typography>
        </Grid>
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
                  label="Имя"
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
                  label="Фамилия"
                  variant="filled"
                  helperText={errors.lastName?.message}
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
              Обновить
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message="Profile updated successfully"
      />
      




    </Container>
    
  );
}

export default Profile;
