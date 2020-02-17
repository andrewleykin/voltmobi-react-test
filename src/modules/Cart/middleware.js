import { push } from "connected-react-router";
import {
  fetchRequest,
  fetchSuccess,
  addToCart,
  removeToCart,
  clearCart as clearCartActions
} from "./actions";
import { save, load, clearLocal, CART_LOCALSTORAGE_KEY } from "../localstorage";
import { getCart } from "./selectors";

export const fetchCart = () => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(load(CART_LOCALSTORAGE_KEY) || []));
};

export const clearCart = () => dispatch => {
  clearLocal(CART_LOCALSTORAGE_KEY);
  dispatch(clearCartActions());
  dispatch(push("/"));
};

export const thunkAddToCart = item => (dispatch, getState) => {
  dispatch(addToCart(item));
  save(CART_LOCALSTORAGE_KEY, getCart(getState()));
};

export const thunkRemoveToCart = itemId => (dispatch, getState) => {
  dispatch(removeToCart(itemId));
  save(CART_LOCALSTORAGE_KEY, getCart(getState()));
};
