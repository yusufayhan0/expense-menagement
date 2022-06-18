//[--] axios configurations and intercaptors

import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = "";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.baseURL = "http://localhost:3004/";
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response;

    if(status === 404){
      window.location.href = "/notfound"
    }
  }
);

export default axios;
