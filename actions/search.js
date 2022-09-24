import axiosClient from "../axios/axiosClient";
import slugify from "slugify";

const SearchAPI = {
  keyword: async (keyword, page = 1) => {
    const result = await axiosClient.get(
      `/search?keyword=${keyword}&page=${page}`
    );
    return result.data;
  },
  getAllCategory: async () => {
    const result = await axiosClient.get("/search/filter");
    return result.data.genres;
  },
  category: async (genres) => {
    const result = await axiosClient.get(
      `/search/category/${slugify(genres.toLowerCase())}`
    );
    return result.data;
  },
};

export default SearchAPI;
