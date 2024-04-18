import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  form: "",
  location: "",
  vehicleEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialValues,
  reducers: {
    addFilters: (_, { payload }) => ({ ...initialValues, ...payload }),
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { addFilters } = filtersSlice.actions;
