import { useCallback, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";

function AuthProvider(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  //данные из бэка загружены на фронт
  const [user, setUser] = useState(null);//хранение данных о пользователя
  const [token, setTokenData] = useState(null);//хранение токена

  const setToken = useCallback((tokenData) => {
    setTokenData(tokenData);

    if (tokenData) {
      Cookies.set("auth-token", tokenData);
    } else {
      Cookies.remove("auth-token");
    }
  }, []);

  


  const logOut = useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setToken]);
 //loadData -функция загрузки данных о пользователе
  const loadData = useCallback(async () => {
    const tokenData = Cookies.get("auth-token");
    setTokenData(tokenData);

    try {
      if (tokenData) {
        const { data } = await api.auth.getProfile();
        setUser(data);
      }
    } catch {
      setToken(null);
    } finally {
      setIsLoaded(true);
    }
  }, [setToken]);
 
  useEffect(() => {
    loadData();
  }, [loadData]);
 //useMemo-функция возвращения значений для контекстов, 
 //в котором хранится техущий пользователь и вспомогательные функции
  const contextValue = useMemo(
    () => ({
      isLoaded,
      //информация о пользователе
      user,
      token,
      setUser,
      setToken,
      logOut,
    }),
    [isLoaded, user, token, setToken, logOut]
  );
 //далее передаем в провойдер
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
