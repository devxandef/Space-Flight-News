import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.baseURL = "https://api.spaceflightnewsapi.net/v3";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
