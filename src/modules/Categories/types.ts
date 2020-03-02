import { ThunkAction } from "redux-thunk";
import { Action } from "redux-actions";

export type CategoriesItemType = {
  id: number;
  title: String;
};

export type ArrayCategoriesItemType = Array<CategoriesItemType>;

export type CategoriesStateType = {
  isLoading: boolean;
  data: ArrayCategoriesItemType;
  active: number;
};

export type ThunkType = ThunkAction<
  void,
  CategoriesStateType,
  unknown,
  Action<any>
>;
