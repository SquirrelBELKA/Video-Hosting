import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import Pochta from "../../pages/Pochta";
import NewPochta from "../../pages/Pochta/NewPochta";
import Podrobnee from "../../pages/Pochta/Podrobnee";
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
         path="/profile"
         element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
         }
        />
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
          path="/pochta"
          element={
          <PrivateRoute>
            <Pochta />
          </PrivateRoute>
          }
         />
         <Route
          path="/newpochta"
          element={
          <PrivateRoute>
            <NewPochta />
          </PrivateRoute>
          }
         />
         <Route
          path="/podrobnee/:id"
          element={
          <PrivateRoute>
            <Podrobnee />
          </PrivateRoute>
          }
         />

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
