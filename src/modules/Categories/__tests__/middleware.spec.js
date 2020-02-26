import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchCategories, fetchRequest, fetchSuccess } from "../index";
import categories from "../../../data/categories.json";

const mockStore = configureMockStore([thunk]);

describe("categories middleware", () => {
  test("fetchCategories", () => {
    const expectedActions = [fetchRequest(), fetchSuccess(categories)];
    const store = mockStore();

    store.dispatch(fetchCategories());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
