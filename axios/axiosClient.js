import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://192.168.1.252:5801/v1`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
