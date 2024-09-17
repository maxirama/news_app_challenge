import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./newsAPI";
import { INewsApiResponse } from "../types";

// Define the initial value for the slice state
const initialState: INewsApiResponse = {
  articles: [],
  totalResults: 0,
  status: "idle",
};


export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state,action) => {
      state.articles = action.payload;
    },
    setTotalResults: (state,action) => {
      state.totalResults = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Export the generated action creators for use in components
export const { setArticles, setTotalResults } = newsSlice.actions;
export default newsSlice.reducer;

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
