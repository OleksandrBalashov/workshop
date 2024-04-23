import { createSelector } from "@reduxjs/toolkit";

export const getCollection = (state) => state.adverts.items;

export const getIsLoading = (state) => state.adverts.isLoading;

export const getFilters = (state) => state.filters;

export const getPage = (state) => state.page;

export const getFavoritesCollection = createSelector([getCollection], (items) =>
  items.filter(({ favorite }) => favorite)
);

export const getFilteredCollection = createSelector(
  [getCollection, getFilters],
  (items, filters) =>
    items
      .filter((item) => item.form.includes(filters.form))
      .filter((item) =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      )
      .filter((item) =>
        filters.vehicleEquipment.length
          ? filters.vehicleEquipment.every(
              (filter) => item[filter] || item.details[filter]
            )
          : item
      )
);
