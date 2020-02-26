import { getCategories, getActiveCategories } from "../index";

describe("categories selectors", () => {
  const state = {
    categories: {
      data: [1, 2, 3],
      active: 1
    }
  };

  test("getCategories", () => {
    expect(getCategories(state)).toEqual(state.categories.data);
  });

  test("getActiveCategories", () => {
    expect(getActiveCategories(state)).toEqual(state.categories.active);
  });
});
