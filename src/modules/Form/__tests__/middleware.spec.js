import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchForm,
  changeField,
  addField,
  fetchRequest,
  fetchSuccess,
  changeFieldActions,
  addFieldActions
} from "../index";

const mockStore = configureMockStore([thunk]);

describe("form middleware", () => {
  test("fetchForm", () => {
    const expectedActions = [fetchRequest(), fetchSuccess([])];
    const store = mockStore();

    store.dispatch(fetchForm());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("changeField", () => {
    const testPayload = { id: 1, value: "test" };
    const expectedActions = [changeFieldActions(testPayload)];
    const store = mockStore({ form: { data: [] } });

    store.dispatch(changeField(testPayload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("addField", () => {
    const testPayload = { id: 1, value: "test" };
    const expectedActions = [addFieldActions(testPayload)];
    const store = mockStore({ form: { data: [] } });

    store.dispatch(addField(testPayload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
