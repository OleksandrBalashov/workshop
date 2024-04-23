import { createSlice } from "@reduxjs/toolkit";

export const initialValues = {
  form: "",
  location: "",
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialValues,
  reducers: {
    addFilters: (_, { payload }) => ({ ...initialValues, ...payload }),
    resetFilters: () => initialValues,
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { addFilters, resetFilters } = filtersSlice.actions;
