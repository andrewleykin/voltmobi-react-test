import {
  fetchRequest,
  fetchSuccess,
  addFieldActions,
  changeFieldActions
} from "../index";

describe("form actions", () => {
  test("fetchRequest", () => {
    expect(fetchRequest()).toEqual({ type: fetchRequest.toString() });
  });

  test("fetchSuccess", () => {
    expect(fetchSuccess([1])).toEqual({
      type: fetchSuccess.toString(),
      payload: [1]
    });
  });

  test("addFieldActions", () => {
    expect(addFieldActions(1)).toEqual({
      type: addFieldActions.toString(),
      payload: 1
    });
  });

  test("changeFieldActions", () => {
    expect(changeFieldActions({ id: 1, value: "test" })).toEqual({
      type: changeFieldActions.toString(),
      payload: { id: 1, value: "test" }
    });
  });
});
