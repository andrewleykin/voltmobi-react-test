import {
  getIsLoadingCart,
  getCart,
  getCartLength,
  getCartTotalSum,
  getFilterCart,
  getFilteredCart,
  getIsLoadedCart,
  getItemInCart
} from "../index";
import { currencyFilter } from "../../utils";

describe("cart selectors", () => {
  const state = {
    cart: {
      isLoading: false,
      isLoaded: false,
      data: [
        { id: 1, cost: 10, categories: [1] },
        { id: 2, cost: 20, categories: [2] }
      ]
    },
    categories: {
      active: 1
    }
  };

  test("getIsLoadingCart", () => {
    expect(getIsLoadingCart(state)).toEqual(state.cart.isLoading);
  });

  test("getCart", () => {
    expect(getCart(state)).toEqual(state.cart.data);
  });

  test("getCartLength", () => {
    expect(getCartLength(state)).toEqual(state.cart.data.length);
  });

  test("getCartTotalSum", () => {
    expect(getCartTotalSum(state)).toEqual(currencyFilter(30));
  });

  test("getIsLoadedCart", () => {
    expect(getIsLoadedCart(state)).toEqual(state.cart.isLoaded);
  });

  test("getItemInCart", () => {
    expect(getItemInCart(state, 1)).toEqual(state.cart.data[0]);
  });

  test("getFilteredCart", () => {
    expect(getFilteredCart(state)).toEqual([state.cart.data[0]]);
  });

  test("getFilterCart with active categories", () => {
    expect(getFilterCart(state)).toEqual(getFilteredCart(state));
  });

  test("getFilterCart with not active actegories", () => {
    const stateNotActiveCategories = {
      ...state,
      categories: {
        active: ""
      }
    };
    expect(getFilterCart(stateNotActiveCategories)).toEqual(
      getCart(stateNotActiveCategories)
    );
  });
});
