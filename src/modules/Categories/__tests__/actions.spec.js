import { fetchRequest, fetchSuccess, setActive, clearActive } from "../index";

describe("categories actions", () => {
  test("fetchRequest", () => {
    expect(fetchRequest()).toEqual({ type: fetchRequest.toString() });
  });

  test("fetchSuccess", () => {
    expect(fetchSuccess([1, 2, 3])).toEqual({
      type: fetchSuccess.toString(),
      payload: [1, 2, 3]
    });
  });

  test("setActive", () => {
    expect(setActive("1")).toEqual({
      type: setActive.toString(),
      payload: "1"
    });
  });

  test("clearActive", () => {
    expect(clearActive()).toEqual({ type: clearActive.toString() });
  });
});
