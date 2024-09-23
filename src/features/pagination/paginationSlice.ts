import { createSlice } from "@reduxjs/toolkit";
import { IPaginationSlice } from "../../types";

const initialState: IPaginationSlice = {
  currentPage: 0,
  currentStartPage: 1,
  currentEndPage: 1,
  currentPageRange: [],
  totalPages: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentStartPage: (state, action) => {
      state.currentStartPage = action.payload;
    },
    setCurrentEndPage: (state, action) => {
      state.currentEndPage = action.payload;
    },
    setCurrentPageRange: (state, action) => {
      state.currentPageRange = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setCurrentStartPage,
  setCurrentEndPage,
  setCurrentPageRange,
  setTotalPages,
} = paginationSlice.actions;

export default paginationSlice.reducer;
