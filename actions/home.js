import axiosClient from "../axios/axiosClient";

const HomeAPI = {
  banner: async () => {
    try {
      const result = await axiosClient.get("/home/banner");
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  home: async (page = 1) => {
    try {
      const result = await axiosClient.get(`/home?page=${page}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  hot: async (page = 1) => {
    try {
      const result = await axiosClient.get(`/home/hot?page=${page}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default HomeAPI;
