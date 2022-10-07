import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HistorySlice = createSlice({
  name: "history",
  initialState: {
    chapters: [],
    comics: [],
  },
  reducers: {
    addChapter: (state, action) => {
      state.chapters = [...state.chapters, action.payload];
    },
    setChapter: (state, action) => {
      state.chapters = action.payload;
    },
    addComic: (state, action) => {
      state.comics = [...state.comics, action.payload];
    },
    setComic: (state, action) => {
      state.comics = action.payload;
    },
    setHistory: (state, action) => {
      state.chapters = action.payload.chapters;
      state.comics = action.payload.comics;
    },
  },
});

export const { addChapter, setChapter, setComic, addComic, setHistory } =
  HistorySlice.actions;

export default HistorySlice.reducer;
