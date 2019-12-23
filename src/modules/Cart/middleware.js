import {
  fetchRequest,
  fetchSuccess,
  addToCart,
  removeToCart,
  clearCart
} from "./actions";
import { save, load, clearLocal } from "../localstorage";
import { getCart } from "./selectors";

export const cartMiddleware = store => next => action => {
  const result = next(action);
  const cart = getCart(store.getState());
  switch (action.type) {
    case fetchRequest.toString():
      store.dispatch(fetchSuccess(load("cart") || []));
      break;
    case addToCart.toString():
    case removeToCart.toString():
      save("cart", cart);
      break;
    case clearCart.toString():
      clearLocal("cart");
      break;
    default:
      return;
  }

  return result;
};
