import { createAction } from "redux-actions";
import { ArrayCategoriesItemType } from "./types";

export const fetchRequest = createAction("CATEGORIES/FETCH_REQUEST");
export const fetchSuccess = createAction<ArrayCategoriesItemType>(
  "CATEGORIES/FETCH_SUCCESS"
);
export const setActive = createAction<number>("CATEGORIES/SET_ACTIVE");
export const clearActive = createAction("CATEGORIES/CLEAR_ACTIVE");
