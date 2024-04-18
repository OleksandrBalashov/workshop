import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./thunk";
import {
  handleAdvertsFulfield,
  handleAdvertsPending,
  handleAdvertsRejected,
} from "./handlers";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: true,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAdverts.fulfilled, handleAdvertsFulfield);
    builder.addCase(getAllAdverts.pending, handleAdvertsPending);
    builder.addCase(getAllAdverts.rejected, handleAdvertsRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
