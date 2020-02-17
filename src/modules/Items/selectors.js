import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";

export const getItems = state => state.items.data;

export const getFilteredItems = createSelector(
  [getActiveCategories, getItems],
  (activeCategories, items) =>
    items.filter(el => el.categories.indexOf(activeCategories) !== -1)
);

export const getFilterItems = createSelector(
  [getActiveCategories, getItems, getFilteredItems],
  (activeCategories, items, filteredItems) =>
    !!activeCategories ? filteredItems : items
);

export const getItemById = (state, id) =>
  createSelector(getItems, items => items.find(item => item.id === id))(state);
