import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Video from "../../pages/Home/Video";
import Statistics from "../../pages/Home/Statistics";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();//хук возвращает информацию об авторизации

  return auth.isLoaded ? (
    <Routes>
       <Route path="/" element={<Home />} />
        
         <Route
         path="/login"
         element={
          <GuestRoute>
            <Login />
          </GuestRoute>
         }
        />
         <Route
         path="/registration"
         element={
          <GuestRoute>
            <Registration />  
          </GuestRoute>
         }
        />
        
         
          <Route
          path="/video"
          element={
          <PrivateRoute>
            <Video />
          </PrivateRoute>
          }/>
           <Route
          path="/statistics"
          element={
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
          }/>

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="**" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );//если данные не загрузились, то рендарим isloaded иначе route
}

export default AppRoutes;
//<Registration />  
