import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = "";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
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
    throw new Error(err.response.data.message);
  }
);

export default axios;
