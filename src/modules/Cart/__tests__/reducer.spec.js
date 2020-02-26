import reducer, {
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "../index";

describe("cart reducer", () => {
  test("fetchRequest", () => {
    const initialState = {
      isLoading: false,
      isLoaded: false,
      data: []
    };

    expect(reducer(initialState, fetchRequest())).toEqual({
      ...initialState,
      isLoading: true,
      isLoaded: true
    });
  });

  test("fetchSuccess", () => {
    const initialState = {
      isLoading: true,
      isLoaded: true,
      data: []
    };
    const testPayload = [1, 2, 3];

    expect(reducer(initialState, fetchSuccess(testPayload))).toEqual({
      ...initialState,
      data: testPayload,
      isLoading: false
    });
  });

  test("addToCartActions", () => {
    const initialState = {
      isLoading: true,
      isLoaded: true,
      data: [1, 2]
    };

    expect(reducer(initialState, addToCartActions(3))).toEqual({
      ...initialState,
      data: [1, 2, 3]
    });
  });

  test("removeToCartActions", () => {
    const initialState = {
      isLoading: true,
      isLoaded: true,
      data: [{ id: 1 }, { id: 2 }]
    };

    expect(reducer(initialState, removeToCartActions(2))).toEqual({
      ...initialState,
      data: [{ id: 1 }]
    });
  });

  test("clearCartActions", () => {
    const initialState = {
      isLoading: true,
      isLoaded: true,
      data: [{ id: 1 }, { id: 2 }]
    };

    expect(reducer(initialState, clearCartActions())).toEqual({
      ...initialState,
      data: []
    });
  });
});
