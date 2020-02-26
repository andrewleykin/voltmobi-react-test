import { createAction } from "redux-actions";

export const fetchRequest = createAction("CART/FETCH_REQUEST");
export const fetchSuccess = createAction("CART/FETCH_SUCCESS");
export const addToCartActions = createAction("CART/ADD_TO_CART");
export const removeToCartActions = createAction("CART/REMOVE_TO_CART");
export const clearCartActions = createAction("CART/CLEAR_CART");
