import { createAction } from "redux-actions";
import { ArrayItemType } from "./types";

export const ITEMS_FETCH_REQUEST = "ITEMS/FETCH_REQUEST";
export const ITEMS_FETCH_SUCCESS = "ITEMS/FETCH_SUCCESS";

export const fetchRequest = createAction(ITEMS_FETCH_REQUEST);

export const fetchSuccess = createAction<ArrayItemType>(ITEMS_FETCH_SUCCESS);
