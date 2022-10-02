import axiosClient from "../axios/axiosClient";

const DetailAPI = {
  detail: async (slug) => {
    const result = await axiosClient.get(`/details${slug}`);
    return result.data;
  },
  chap: async (slug) => {
    const result = await axiosClient.get(`/read?slug=${slug}`);
    return result.data.results;
  },
  allchap: async (slug) => {
    const result = await axiosClient.get(`/read/chapters?slug=${slug}`);
    return result.data;
  },
};

export default DetailAPI;
