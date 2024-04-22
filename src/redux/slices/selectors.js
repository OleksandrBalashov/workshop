import { createSelector } from "@reduxjs/toolkit";

export const getCollection = (state) => state.adverts.items;

export const getIsLoading = (state) => state.adverts.isLoading;

export const getFilters = (state) => state.filters;

export const getPage = (state) => state.page;

export const getFavoritesCollection = createSelector([getCollection], (items) =>
  items.filter(({ favorite }) => favorite)
);
