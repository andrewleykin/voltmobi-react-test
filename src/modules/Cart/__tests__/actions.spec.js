import {
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "../index";

describe("cart actions", () => {
  test("fetchRequest", () => {
    expect(fetchRequest()).toEqual({ type: fetchRequest.toString() });
  });

  test("fetchSuccess", () => {
    const testPayload = [1, 2, 3];
    expect(fetchSuccess(testPayload)).toEqual({
      type: fetchSuccess.toString(),
      payload: testPayload
    });
  });

  test("addToCartActions", () => {
    const testPayload = 1;
    expect(addToCartActions(testPayload)).toEqual({
      type: addToCartActions.toString(),
      payload: testPayload
    });
  });

  test("removeToCartActions", () => {
    const testPayload = 1;
    expect(removeToCartActions(testPayload)).toEqual({
      type: removeToCartActions.toString(),
      payload: testPayload
    });
  });

  test("clearCartActions", () => {
    expect(clearCartActions()).toEqual({ type: clearCartActions.toString() });
  });
});
