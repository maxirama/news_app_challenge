import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INewsSlice, INewsApiResponse } from "../types";
import { fetchNews } from "../services/api";

// Define the initial value for the slice state
const initialState: INewsSlice = {
  newsData: {
    articles: [],
    totalResults: 0,
    status: "idle",
  },
};

export const fetchNewsData = createAsyncThunk(
  "news/fetchNewsData",
  async (searchValue: string) => {
    if (searchValue !== "") {
      const response: INewsApiResponse = await fetchNews(searchValue);
      return response;
    } else {
      throw new Error("Search value cannot be empty");
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.newsData.status = "loading";
        console.log("prueba");
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.newsData = action.payload;
        state.newsData.status = "idle";
        console.log("buena peticion");
      })
      .addCase(fetchNewsData.rejected, (state) => {
        state.newsData.status = "failed";
        console.log("falló");
      });
  },
});

// Export the generated action creators for use in components
export const { setNewsData } = newsSlice.actions;
export default newsSlice.reducer;
