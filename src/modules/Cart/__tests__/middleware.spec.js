import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchCart,
  addToCart,
  removeToCart,
  clearCart,
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "../index";

const mockStore = configureMockStore([thunk]);

describe("cart middleware", () => {
  test("fetchCart", () => {
    const expectedActions = [fetchRequest(), fetchSuccess([])];
    const store = mockStore();

    store.dispatch(fetchCart());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("addToCart", () => {
    const testPayload = { id: 1, value: "test" };
    const expectedActions = [addToCartActions(testPayload)];
    const store = mockStore({ cart: { data: [] } });

    store.dispatch(addToCart(testPayload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("removeToCart", () => {
    const testPayload = 1;
    const expectedActions = [removeToCartActions(testPayload)];
    const store = mockStore({ cart: { data: [] } });

    store.dispatch(removeToCart(testPayload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("clearCart", () => {
    const expectedActions = [clearCartActions()];
    const store = mockStore();

    store.dispatch(clearCart());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
