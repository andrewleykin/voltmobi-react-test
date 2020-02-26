import reducer, {
  fetchRequest,
  fetchSuccess,
  addFieldActions,
  changeFieldActions
} from "../index";

describe("form reducer", () => {
  test("fetchRequest", () => {
    const initilState = {
      isLoading: false,
      data: []
    };

    expect(reducer(initilState, fetchRequest())).toEqual({
      ...initilState,
      isLoading: true
    });
  });

  test("fetchSuccess", () => {
    const initilState = {
      isLoading: true,
      data: []
    };
    const testPayload = [1, 2, 3];

    expect(reducer(initilState, fetchSuccess(testPayload))).toEqual({
      isLoading: false,
      data: testPayload
    });
  });

  test("addFieldActions", () => {
    const initilState = {
      isLoading: true,
      data: [1, 2]
    };

    expect(reducer(initilState, addFieldActions(3))).toEqual({
      ...initilState,
      data: [1, 2, 3]
    });
  });

  test("changeFieldActions", () => {
    const initilState = {
      isLoading: true,
      data: [
        { id: 1, value: "asd" },
        { id: 2, value: "zxc" }
      ]
    };
    const testPayload = { id: 1, value: "test" };

    expect(reducer(initilState, changeFieldActions(testPayload))).toEqual({
      ...initilState,
      data: [testPayload, { id: 2, value: "zxc" }]
    });
  });
});
