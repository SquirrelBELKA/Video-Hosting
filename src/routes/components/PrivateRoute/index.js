import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams();
  url.set("redirect", location.pathname + location.search);
//при успешном входе перенаправление на страницу профиль
  return auth.user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        search: url.toString(),
      }}
    />
  );
}

export default PrivateRoute;
