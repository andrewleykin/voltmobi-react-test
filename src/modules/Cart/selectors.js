import { getActiveCategories } from "../Categories";
import { currencyFilter } from "../utils";

export const getIsLoadingCart = state => state.cart.isLoading;

export const getCart = state => state.cart.data;

export const getItemInCart = (state, id) =>
  getCart(state).find(item => item.id === id);

export const getCartLength = state => getCart(state).length;

export const getCartTotalSum = state =>
  currencyFilter(getCart(state).reduce((result, { cost }) => result + cost, 0));

export const getFilterCart = state => {
  const activeCategories = getActiveCategories(state);
  return !!activeCategories
    ? getCart(state).filter(
        el => el.categories.indexOf(activeCategories) !== -1
      )
    : getCart(state);
};
