import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import catsApi from "../../common/catsApi";
import { useSelector } from "react-redux";

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
export const getSearchInput = (state) => state.cats.searchInput;
export const getSearchResult = (state) => state.cats.searchResult;
export const getSearchSubmited = (state) => state.cats.searchSubmited;
export const getActionLog = (state) => state.cats.actionLog;
export const getLikes = (state) => state.cats.likes;
export const getDislikes = (state) => state.cats.dislikes;
export const getFavourites = (state) => state.cats.favourites;

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
  searchInput: "",
  searchSubmited: "",
  searchResult: [],
  actionLog: [],
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
      `images/search?apiKey=${
        process.env.REACT_APP_CAT_API
      }&limit=${limit}&order=${order}&page=${
        page > 0 ? page : "1"
      }&mime_types=${type}&breed_id=${breed}`
    );
    return response.data;
  }
);
export const fetchAsyncSearch = createAsyncThunk(
  "cats/fetchAsyncSearch",
  async (_, { getState }) => {
    const input = getState().cats.searchInput || "";

    const searchedResponse = await catsApi.get(
      `breeds/search?apiKey=${process.env.REACT_APP_CAT_API}&q=${input}`
    );

    const breedList = getState().cats.breedList || [];

    const result = await searchedResponse.data.map((breed) => {
      const imageUrl = breedList.find(
        (item) => item.image?.id === breed.reference_image_id
      ).image.url;
      return { ...breed, imageUrl: imageUrl };
    });
    return result;
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
    const breedResponse = await catsApi.get(`breeds/${id}`);
    const imageResponse = await catsApi.get(
      `images/search?&limit=5&breed_id=${id}`
    );
    return { ...breedResponse.data, images: imageResponse.data };
  }
);

export const voteForPicture = createAsyncThunk(
  "cats/voteForPicture",
  async (payload) => {
    await catsApi.post(`votes`, payload, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
    return payload;
  }
);

export const addFavouritePicture = createAsyncThunk(
  "cats/addFavouritePicture",
  async (payload) => {
    await catsApi.post(`favourites`, payload, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
    return payload;
  }
);

export const fetchActionLogFavourite = createAsyncThunk(
  "cats/fetchActionLogFavourite",
  async (_, { getState }) => {
    const response = await catsApi.get(`favourites`, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });

    const lastLog = response.data.pop();
    lastLog["value"] = 2;

    const newActionLog = getState().cats.actionLog.slice();
    newActionLog.unshift(lastLog);

    newActionLog.splice(4, 1);
    return newActionLog;
  }
);

export const fetchAsyncFavourites = createAsyncThunk(
  "cats/fetchAsyncFavourites",
  async () => {
    const response = await catsApi.get(`favourites`, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
    return response.data;
  }
);

export const fetchAsyncVotes = createAsyncThunk(
  "cats/fetchAsyncVotes",
  async () => {
    const response = await catsApi.get(`votes`, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
    console.log(response.data)
    return response.data;
  }
);

export const deleteFavourite = createAsyncThunk(
  "cats/deleteFavourite",
  async (id) => {
    const response = await catsApi.delete(`favourites/${id}`, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });
    return response.data;
  }
);

export const deleteVote = createAsyncThunk("cats/deleteVote", async (id) => {
  const response = await catsApi.delete(`votes/${id}`, {
    headers: { "x-api-key": process.env.REACT_APP_CAT_API },
  });
  return response.data;
});

export const fetchActionLogVotes = createAsyncThunk(
  "cats/fetchActionLogVotes",
  async (_, { getState }) => {
    const response = await catsApi.get(`votes`, {
      headers: { "x-api-key": process.env.REACT_APP_CAT_API },
    });

    const lastLog = response.data.pop();

    const newActionLog = getState().cats.actionLog.slice();
    newActionLog.unshift(lastLog);

    newActionLog.splice(4, 1);
    return newActionLog;
  }
);

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
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
      payload === "next" ? (state.page += 1) : (state.page -= 1);
    },
    setSelectedBreed: (state, { payload }) => {
      state.selected = payload;
    },
    setSearchInput: (state, { payload }) => {
      state.searchInput = payload;
    },
    setSearchSubmited: (state, { payload }) => {
      state.searchSubmited = payload;
    },
  },
  extraReducers: {
    [fetchAsyncBreeds.fulfilled]: (state, { payload }) => {
      return { ...state, breeds: payload };
    },
    [fetchAsyncBreedList.fulfilled]: (state, { payload }) => {
      return { ...state, breedList: payload };
    },
    [fetchAsyncImages.fulfilled]: (state, { payload }) => {
      return { ...state, galleryImages: payload };
    },
    [fetchAsyncRandom.fulfilled]: (state, { payload }) => {
      return { ...state, randomCat: payload };
    },
    [fetchAsyncFavourites.fulfilled]: (state, { payload }) => {
      return { ...state, favourites: payload };
    },
    [fetchAsyncVotes.fulfilled]: (state, { payload }) => {
      // const likes = payload.filter((item) => item.value === 1);
      let likes = [];
      let dislikes = [];
      payload.forEach((el) =>
        el.value === 1 ? likes.push(el) : dislikes.push(el)
      );
      console.log(likes)
      return { ...state, likes: likes, dislikes: dislikes };
    },
    // [deleteFavourite.fulfilled]: (state, { payload }) => {
    //   return { ...state, favourites: payload };
    // },
    [fetchSelectedBreed.fulfilled]: (state, { payload }) => {
      return { ...state, selected: payload };
    },
    [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
      return { ...state, searchResult: payload };
    },
    [fetchActionLogFavourite.fulfilled]: (state, { payload }) => {
      return { ...state, actionLog: payload };
    },
    [fetchActionLogVotes.fulfilled]: (state, { payload }) => {
      return { ...state, actionLog: payload };
    },
  },
});

export const {
  setLimit,
  setBreed,
  setOrder,
  setPage,
  setType,
  setSelectedBreed,
  setSearchSubmited,
  setSearchInput,
} = catSlice.actions;

export default catSlice.reducer;
