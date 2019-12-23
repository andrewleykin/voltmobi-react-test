import { createAction } from "redux-actions";

export const fetchRequest = createAction("CATEGORIES/FETCH_REQUEST");
export const fetchSuccess = createAction("CATEGORIES/FETCH_SUCCESS");
export const setActive = createAction("CATEGORIES/SET_ACTIVE");
export const clearActive = createAction("CATEGORIES/CLEAR_ACTIVE");
