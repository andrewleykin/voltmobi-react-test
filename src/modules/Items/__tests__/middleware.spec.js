import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchItems, fetchRequest, fetchSuccess } from "../index";
import items from "../../../data/items.json";

const mockStore = configureMockStore([thunk]);

describe("items middleware", () => {
  test("fetchItems", () => {
    const expectedActions = [fetchRequest(), fetchSuccess(items)];
    const store = mockStore();

    store.dispatch(fetchItems());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
