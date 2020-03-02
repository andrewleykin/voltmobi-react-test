import { fetchRequest, fetchSuccess, setActive, clearActive } from "../index";
import categories from "../../../data/categories.json";

describe("categories actions", () => {
  test("fetchRequest", () => {
    expect(fetchRequest()).toEqual({ type: fetchRequest.toString() });
  });

  test("fetchSuccess", () => {
    expect(fetchSuccess(categories)).toEqual({
      type: fetchSuccess.toString(),
      payload: categories
    });
  });

  test("setActive", () => {
    expect(setActive(1)).toEqual({
      type: setActive.toString(),
      payload: 1
    });
  });

  test("clearActive", () => {
    expect(clearActive()).toEqual({ type: clearActive.toString() });
  });
});
