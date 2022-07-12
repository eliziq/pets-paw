import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./cats/catSlice";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});
