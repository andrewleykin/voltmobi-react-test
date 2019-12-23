import { createAction } from "redux-actions";

export const fetchRequest = createAction("CART/FETCH_REQUEST");
export const fetchSuccess = createAction("CART/FETCH_SUCCESS");
export const addToCart = createAction("CART/ADD_TO_CART");
export const removeToCart = createAction("CART/REMOVE_TO_CART");
export const clearCart = createAction("CART/CLEAR_CART");
