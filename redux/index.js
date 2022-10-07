import { configureStore } from "@reduxjs/toolkit";
import { HistorySlice } from "./slices";

export const store = configureStore({
  reducer: {
    history: HistorySlice,
  },
});
