import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "../../api";
import catsApi from "../../common/catsApi";

//state.name-of-slice.name-of-property
export const getAllBreeds = (state) => state.cats.breeds;
export const getAllImages = (state) => state.cats.galleryImages;
export const getBreed = (state) => state.cats.breedFilter;
export const getOrder = (state) => state.cats.orderFilter;
export const getPage = (state) => state.cats.page;
export const getType = (state) => state.cats.typeFilter;
export const getLimit = (state) => state.cats.limitFilter;
export const getRandomCat = (state) => state.cats.randomCat;
export const getBreedList = (state) => state.cats.breedList;
export const getSelectedBreed = (state) => state.cats.selected;

const initialState = {
  breedList: [],
  breeds: [],
  galleryImages: [],
  selected: {},
  limitFilter: "5",
  orderFilter: "rand",
  breedFilter: "",
  typeFilter: "gif,jpg,png",
  page: 1,
  randomCat: {},
  likes: [],
  favourites: [],
  dislikes: [],
};

export const fetchAsyncBreedList = createAsyncThunk(
  "cats/fetchAsyncBreedList",
  async () => {
    const response = await catsApi.get(
      `breeds?apiKey=${process.env.REACT_APP_CAT_API}`
    );
    return response.data;
  }
);

export const fetchAsyncBreeds = createAsyncThunk(
  "cats/fetchAsyncBreeds",
  async (_, { getState }) => {
    const limit = getState().cats.limitFilter || 5;
    const order = getState().cats.orderFilter || "rand";
    const breed = getState().cats.breedFilter || "";
    const breedList = getState().cats.breedList || "";
    const page = getState().cats.page || "1";

    let result;
    if (breed) {
      result = breedList.filter((item) => item.id === breed);
    } else {
      const resp = await catsApi.get(
        `breeds?apiKey=${
          process.env.REACT_APP_CAT_API
        }&limit=${limit}&order=${order}&page=${page > 0 ? page : "1"}`
      );
      result = resp.data;
    }

    return result;
  }
);

export const fetchAsyncImages = createAsyncThunk(
  "cats/fetchAsyncImages",
  async (_, { getState }) => {
    const limit = getState().cats.limitFilter || 5;
    const order = getState().cats.orderFilter || "rand";
    const breed = getState().cats.breedFilter || "";
    const type = getState().cats.typeFilter || "gif,jpg,png";
    const page = getState().cats.page || "1";

    const response = await catsApi.get(
      `images/search?apiKey=${process.env.REACT_APP_CAT_API}&limit=${limit}&order=${order}&page=${page > 0 ? page : "1"}&mime_types=${type}&breed_id=${breed}`
    );
    return response.data;
  }
);

export const fetchAsyncRandom = createAsyncThunk(
  "cats/fetchAsyncRandom",
  async () => {
    const response = await catsApi.get(`images/search`);
    return response.data.shift();
  }
);

export const fetchSelectedBreed = createAsyncThunk(
  "cats/fetchSelectedBreed",
  async (id, { getState }) => {
    const breedList = getState().cats.breedList || [];

    const imageUrl = await breedList.filter((item) => item.id === id).shift()
      ?.image.url;
    console.log(imageUrl);

    const breedResponse = await catsApi.get(`breeds/${id}`);
    const imageResponse = await catsApi.get(`images/search?&limit=5&breed_id=${id}`);

    console.log( imageResponse.data);
    return { ...breedResponse.data, images: imageResponse.data};
  }
);

export const voteForPicture = createAsyncThunk(
  "cats/voteForPicture",
  async (payload) => {
    const response = await catsApi.post(`votes`, payload);
    return response.data;
  }
);

export const addFavouritePicture = createAsyncThunk(
  "cats/addFavouritePicture",
  async (payload) => {
    const response = await catsApi.post(`favourites`, payload, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
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
    addBreedList: (state, { payload }) => {
      state.breedList = payload;
    },
    addGalleryImages: (state, { payload }) => {
      state.galleryImages = payload;
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
      console.log(payload);
      payload === "next" ? (state.page += 1) : (state.page -= 1);
    },
    setRandomCat: (state, { payload }) => {
      state.randomCat = payload;
    },
    setSelectedBreed: (state, { payload }) => {
      state.selected = payload;
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
    [fetchAsyncBreedList.fulfilled]: (state, { payload }) => {
      console.log("fetched sucsessfully");
      return { ...state, breedList: payload };
    },
    [fetchAsyncImages.fulfilled]: (state, { payload }) => {
      console.log("fetched sucsessfully");
      return { ...state, galleryImages: payload };
    },
    [fetchAsyncRandom.fulfilled]: (state, { payload }) => {
      console.log("fetched sucsessfully");
      return { ...state, randomCat: payload };
    },
    [fetchSelectedBreed.fulfilled]: (state, { payload }) => {
      console.log("fetched sucsessfully");
      return { ...state, selected: payload };
    },
    [fetchAsyncBreeds.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const {
  addBreedList,
  addBreeds,
  addGalleryImages,
  setLimit,
  setBreed,
  setOrder,
  setPage,
  setType,
  setRandomCat,
  setSelectedBreed,
} = catSlice.actions;

export default catSlice.reducer;
