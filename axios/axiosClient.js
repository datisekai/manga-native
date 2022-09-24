import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://192.168.1.10:6060/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
