import { createSlice } from "@reduxjs/toolkit";
import { IPaginationSlice } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setStartPage, setEndPage } from "../../components/Pagination/utils";

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
  extraReducers: (builder) => {
    builder.addCase(setActualPage.fulfilled, (state, action) => {
      state.currentStartPage = setStartPage(state.currentPage);
      state.currentEndPage = setEndPage(state.currentPage, state.totalPages);
    });
  },
});

export const setActualPage = createAsyncThunk(
  "pagination/setCurrentPagination",
  async (page: number) => {
    setCurrentPage(page);
  }
);

export const {
  setCurrentPage,
  setCurrentStartPage,
  setCurrentEndPage,
  setCurrentPageRange,
  setTotalPages,
} = paginationSlice.actions;

export default paginationSlice.reducer;
