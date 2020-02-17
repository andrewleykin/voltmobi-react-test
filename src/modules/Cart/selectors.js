import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";
import { currencyFilter } from "../utils";

export const getIsLoadingCart = state => state.cart.isLoading;

export const getCart = state => state.cart.data;

export const getItemInCart = (state, id) => {
  return createSelector(getCart, cartData =>
    cartData.find(item => item.id === id)
  )(state);
};

export const getCartLength = state => getCart(state).length;

export const getCartTotalSum = createSelector(getCart, cartData => {
  return currencyFilter(cartData.reduce((acc, item) => acc + item.cost, 0));
});

export const getFilteredCart = createSelector(
  [getActiveCategories, getCart],
  (activeCategories, cartData) =>
    cartData.filter(el => el.categories.indexOf(activeCategories) !== -1)
);

export const getFilterCart = createSelector(
  [getActiveCategories, getCart, getFilteredCart],
  (activeCategories, cartData, filteredCartData) =>
    !!activeCategories ? filteredCartData : cartData
);
