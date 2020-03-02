import { createAction } from "redux-actions";
import { ArrayItemType, ItemType, ItemIdType } from "../Items";

export const CART_FETCH_REQUEST = "CART/FETCH_REQUEST";
export const CART_FETCH_SUCCESS = "CART/FETCH_SUCCESS";
export const CART_ADD_TO_CART = "CART/ADD_TO_CART";
export const CART_REMOVE_TO_CART = "CART/REMOVE_TO_CART";
export const CART_CLEAR_CART = "CART/CLEAR_CART";

export const fetchRequest = createAction(CART_FETCH_REQUEST);
export const fetchSuccess = createAction<ArrayItemType>(CART_FETCH_SUCCESS);
export const addToCartActions = createAction<ItemType>(CART_ADD_TO_CART);
export const removeToCartActions = createAction<ItemIdType>(
  CART_REMOVE_TO_CART
);
export const clearCartActions = createAction(CART_CLEAR_CART);
