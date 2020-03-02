import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";
import { InitialState } from "../index";
import { ArrayItemType, ItemType } from "./types";

export const getItems = (state: InitialState): ArrayItemType =>
  state.items.data;

export const getFilteredItems = createSelector<
  InitialState,
  number,
  ArrayItemType,
  ArrayItemType
>([getActiveCategories, getItems], (activeCategories, items) =>
  items.filter(el => el.categories.includes(activeCategories))
);

export const getFilterItems = createSelector<
  InitialState,
  number,
  ArrayItemType,
  ArrayItemType,
  ArrayItemType
>(
  [getActiveCategories, getItems, getFilteredItems],
  (activeCategories, items, filteredItems) =>
    !!activeCategories ? filteredItems : items
);

export const getItemById = (
  state: InitialState,
  id: number
): ItemType | undefined =>
  createSelector(getItems, items => items.find(item => item.id === id))(state);
