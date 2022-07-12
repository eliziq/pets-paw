import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "../../api";
import catsApi from "../../common/catsApi";
import { useSelector } from "react-redux";

//state.name-of-slice.name-of-property
export const getAllBreeds = (state) => state.cats.breeds;
export const getBreed = (state) => state.cats.breedFilter;
export const getOrder = (state) => state.cats.orderFilter;
export const getPage = (state) => state.cats.pageFilter;
export const getType = (state) => state.cats.typeFilter;
export const getLimit = (state) => state.cats.limitFilter;

const initialState = {
  breeds: [],
  selected: {},
  limitFilter: "5",
  orderFilter: "rand",
  breedFilter: "",
  typeFilter: "all",
  page: 1,
};

export const fetchAsyncBreeds = createAsyncThunk(
  "cats/fetchAsyncBreeds",
  async (_, { getState }) => {

    const limit = getState().cats.limitFilter || 5;
    const order = getState().cats.orderFilter || 'rand';
    const breed = getState().cats.breedFilter || '';
    const type = getState().cats.typeFilter || 'all';
    const page = getState().cats.page || '1';

    const response = await catsApi.get(
      `breeds?apiKey=${process.env.REACT_APP_CAT_API}&limit=${limit}&order=${order}`
    );
    return response.data;
  }
);

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    addBreeds: (state, { payload }) => {
      state.breeds = payload;
    },
    setLimit: (state, { payload }) => {
      state.limitFilter = payload;
    },
    setOrder: (state, { payload }) => {
      state.orderFilter = payload;
    },
    setBreed: (state, { payload }) => {
      state.breedFilter = payload;
    },
    setType: (state, { payload }) => {
      state.typeFilter = payload;
    },
    setPage: (state, { payload }) => {
      state.pageFilter = payload;
    },
  },
  extraReducers: {
    [fetchAsyncBreeds.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncBreeds.fulfilled]: (state, { payload }) => {
      console.log("fetched sucsessfully");
      return { ...state, breeds: payload };
    },
    [fetchAsyncBreeds.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { addBreeds, setLimit, setBreed, setOrder, setPage, setType } =
  catSlice.actions;

export default catSlice.reducer;
