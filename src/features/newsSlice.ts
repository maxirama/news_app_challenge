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
  selectedArticle: {},
  noResultsObtained: false,
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
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    clearNewsData: (state) => {
      state.newsData = initialState.newsData;
      state.noResultsObtained = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.newsData.status = "loading";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.newsData = action.payload;
        if (action.payload.totalResults === 0) {
          state.noResultsObtained = true;
        }
        state.newsData.status = "idle";
      })
      .addCase(fetchNewsData.rejected, (state) => {
        state.noResultsObtained = false;
        state.newsData.status = "failed";
      });
  },
});

// Export the generated action creators for use in components
export const { clearNewsData, setNewsData, setSelectedArticle } =
  newsSlice.actions;
export default newsSlice.reducer;
