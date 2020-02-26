import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";
import { InitialState } from "../index";

export type ItemType = {
  id: number;
  name: string;
  descr: string;
  cost: number;
  categories: Array<number>;
};

export type ItemsStateType = {
  isLoading: boolean;
  data: Array<ItemType>;
};

export const getItems = (state: InitialState) => state.items.data;

export const getFilteredItems = createSelector(
  [getActiveCategories, getItems],
  (activeCategories, items) =>
    items.filter(el => el.categories.includes(activeCategories))
);

export const getFilterItems = createSelector(
  [getActiveCategories, getItems, getFilteredItems],
  (activeCategories, items, filteredItems) =>
    !!activeCategories ? filteredItems : items
);

export const getItemById = (state: InitialState, id: number) =>
  createSelector(getItems, items => items.find(item => item.id === id))(state);
