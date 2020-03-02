// import { push } from "connected-react-router";
import {
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "./actions";
import { save, load, clearLocal, CART_LOCALSTORAGE_KEY } from "../localstorage";
import { getCart } from "./selectors";
import { ItemType } from "../Items";
import { ThunkType } from "./types";

export const fetchCart = (): ThunkType => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(load(CART_LOCALSTORAGE_KEY) || []));
};

export const addToCart = (item: ItemType): ThunkType => (
  dispatch,
  getState
) => {
  dispatch(addToCartActions(item));
  save(CART_LOCALSTORAGE_KEY, getCart(getState()));
};

export const removeToCart = (itemId: number): ThunkType => (
  dispatch,
  getState
) => {
  dispatch(removeToCartActions(itemId));
  save(CART_LOCALSTORAGE_KEY, getCart(getState()));
};

export const clearCart = (): ThunkType => dispatch => {
  clearLocal(CART_LOCALSTORAGE_KEY);
  dispatch(clearCartActions());
  // dispatch(push("/"));
};
