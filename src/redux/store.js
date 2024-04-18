import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./slices/advertsSlice";
import { filtersReducer } from "./slices/filtersSlice";
import { pageReducer } from "./slices/pageSlice";

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filters: filtersReducer,
    page: pageReducer,
  },
});

export default store;
