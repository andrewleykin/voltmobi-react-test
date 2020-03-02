import { InitialState } from "../index";
import { ArrayCategoriesItemType } from "./types";

export const getCategories = (state: InitialState): ArrayCategoriesItemType =>
  state.categories.data;
export const getActiveCategories = (state: InitialState): number =>
  state.categories.active;
