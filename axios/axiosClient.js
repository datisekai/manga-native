import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://manga-api-lf7a.vercel.app/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
