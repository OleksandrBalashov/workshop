import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "filters",
  initialState: 1,
  reducers: {
    increasePage: (state) => state + 1,
    resetPage: () => 1,
  },
});

export const pageReducer = pageSlice.reducer;

export const { increasePage, resetPage } = pageSlice.actions;
