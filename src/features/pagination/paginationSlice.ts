import { createSlice } from "@reduxjs/toolkit";
import { IPaginationSlice } from "../../types";

const initialState: IPaginationSlice = {
  currentPage: 1,
  currentPageRange: [],
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPageRange: (state, action) => {
      state.currentPageRange = action.payload;
    },
    clearFilters: (state) => {
      state = initialState;
    },
  },
});

export const { setCurrentPage, setCurrentPageRange } = paginationSlice.actions;

export default paginationSlice.reducer;
