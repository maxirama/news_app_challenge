import { createSlice } from "@reduxjs/toolkit";
import { IFiltersSlice } from "../../types";

const initialState: IFiltersSlice = {
  selectedLanguage: "en",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    clearFilters: (state) => {
      state = initialState;
    }
  },
});

export const { setSelectedLanguage } = filtersSlice.actions;

export default filtersSlice.reducer;
