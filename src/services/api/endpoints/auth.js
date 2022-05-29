import axios from "../axios";
//запросы к беку
const endpoints = {
  registration: (data) => axios.post("/v1/auth/signup", data),
  login: (data) => axios.post("/v1/auth/signin", data),
  send: (data) =>axios.post("/v1/message/send", data),
  
  appPassword: (data) =>axios.post("/v1/user/add/appPassword", data),


  forgotPassword: (data) => axios.post("/v1/auth/forgot/password", data),
  getProfile: () => axios.get("/v1/user/"),
  updateProfile: (data) => axios.patch("/v1/auth/me", data),
};

export default endpoints;
