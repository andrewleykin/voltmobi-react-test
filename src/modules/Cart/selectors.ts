import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";
import { currencyFilter } from "../utils";
import { InitialState } from "../index";
import { ItemType } from "../Items";

export type CartStateType = {
  isLoaded: Boolean;
  isLoading: Boolean;
  data: Array<ItemType>;
};

export const getIsLoadingCart = (state: InitialState) => state.cart.isLoading;
export const getIsLoadedCart = (state: InitialState) => state.cart.isLoaded;

export const getCart = (state: InitialState) => state.cart.data;

export const getItemInCart = (state: InitialState, id: number) => {
  return createSelector(getCart, cartData =>
    cartData.find(item => item.id === id)
  )(state);
};

export const getCartLength = (state: InitialState) => getCart(state).length;

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
