import {
  getFilterItems,
  getFilteredItems,
  getItems,
  getItemById
} from "../index";

describe("items selectors", () => {
  const state = {
    items: {
      data: [
        { categories: [1], id: 1 },
        { categories: [2], id: 2 }
      ]
    },
    categories: {
      active: 1
    }
  };

  test("getItems", () => {
    expect(getItems(state)).toEqual(state.items.data);
  });

  test("getItemById", () => {
    expect(getItemById(state, 1)).toEqual(state.items.data[0]);
  });

  test("getFilteredItems", () => {
    expect(getFilteredItems(state)).toEqual([{ categories: [1], id: 1 }]);
  });

  test("getFilterItems with active categories", () => {
    expect(getFilterItems(state)).toEqual(getFilteredItems(state));
  });

  test("getFilterItems with not active actegories", () => {
    const stateNotActiveCategories = {
      ...state,
      categories: {
        active: ""
      }
    };

    expect(getFilterItems(stateNotActiveCategories)).toEqual(
      getItems(stateNotActiveCategories)
    );
  });
});
