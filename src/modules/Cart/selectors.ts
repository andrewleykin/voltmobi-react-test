import { createSelector } from "reselect";
import { getActiveCategories } from "../Categories";
import { currencyFilter } from "../utils";
import { InitialState } from "../index";
import { ArrayItemType, ItemType } from "../Items";

export const getIsLoadingCart = (state: InitialState): boolean =>
  state.cart.isLoading;
export const getIsLoadedCart = (state: InitialState): boolean =>
  state.cart.isLoaded;

export const getCart = (state: InitialState): ArrayItemType => state.cart.data;

export const getItemInCart = (
  state: InitialState,
  id: number
): ItemType | undefined => {
  return createSelector(getCart, cartData =>
    cartData.find(item => item.id === id)
  )(state);
};

export const getCartLength = (state: InitialState): number =>
  getCart(state).length;

export const getCartTotalSum = createSelector<
  InitialState,
  ArrayItemType,
  string
>(getCart, cartData => {
  return currencyFilter(cartData.reduce((acc, item) => acc + item.cost, 0));
});

export const getFilteredCart = createSelector<
  InitialState,
  number,
  ArrayItemType,
  ArrayItemType
>([getActiveCategories, getCart], (activeCategories, cartData) =>
  cartData.filter(el => el.categories.indexOf(activeCategories) !== -1)
);

export const getFilterCart = createSelector<
  InitialState,
  number,
  ArrayItemType,
  ArrayItemType,
  ArrayItemType
>(
  [getActiveCategories, getCart, getFilteredCart],
  (activeCategories, cartData, filteredCartData) =>
    !!activeCategories ? filteredCartData : cartData
);
