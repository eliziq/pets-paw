import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "../../api";

const initialState = {
  breeds: {},
  selected: {},
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addCats: (state, { payload }) => {
      state.cats = payload;
    },
  },
});

export const { addCats } = catSlice.actions;

export default catSlice.reducer;