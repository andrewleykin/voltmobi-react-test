import { fetchRequest, fetchSuccess } from "../index";

describe("items actions", () => {
  test("fetchRequest", () => {
    expect(fetchRequest()).toEqual({ type: fetchRequest.toString() });
  });

  test("fetchSuccess", () => {
    expect(fetchSuccess([1, 2, 3])).toEqual({
      type: fetchSuccess.toString(),
      payload: [1, 2, 3]
    });
  });
});
