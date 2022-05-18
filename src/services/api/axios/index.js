import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("auth-token");
    //перехватчик,который будет перед запросом добавлять заголовок с токеном(если есть в куки)
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error)
  } 
);

export default axiosInstance;
