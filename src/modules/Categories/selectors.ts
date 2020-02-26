import { InitialState } from "../index";

export type CategoriesItemType = {
  id: Number;
  title: String;
};

export type CategoriesStateType = {
  isLoading: boolean;
  data: Array<CategoriesItemType>;
  active: number;
};

export const getCategories = (state: InitialState) => state.categories.data;
export const getActiveCategories = (state: InitialState) =>
  state.categories.active;
