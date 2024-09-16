// This file demonstrates typical usage of Redux Toolkit's createSlice function
// for defining reducer logic and actions, as well as related thunks and selectors.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState, AppThunk } from "../store/store";
import { fetchCount } from "./counterAPI";
import { INewsApiResponse } from "../types";

// Define the initial value for the slice state
const initialState: INewsApiResponse = {
  articles: [],
  totalResults: 0,
  status: "idle",
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const newsSlice = createSlice({
  name: "news",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setNewsArticles: (state,action) => {
      state.articles = action.payload;
    },
    setTotalResults: (state,action) => {
      state.totalResults = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      // Handle the action types defined by the `incrementAsync` thunk defined below.
      // This lets the slice reducer update the state with request status and results.
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
export const { setNewsArticles, setTotalResults } = newsSlice.actions;


// Thunks are commonly used for async logic like fetching data.
// The `createAsyncThunk` method is used to generate thunks that
// dispatch pending/fulfilled/rejected actions based on a promise.
// In this example, we make a mock async request and return the result.
// The `createSlice.extraReducers` field can handle these actions
// and update the state with the results.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
