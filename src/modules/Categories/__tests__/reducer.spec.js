import categories, {
  fetchRequest,
  fetchSuccess,
  setActive,
  clearActive
} from "../index";

describe("categories reducer", () => {
  test("fetchRequest", () => {
    const initialState = {
      isLoading: false,
      data: [],
      active: ""
    };
    expect(categories(initialState, fetchRequest())).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  test("fetchSuccess", () => {
    const initialState = {
      isLoading: true,
      data: [],
      active: ""
    };
    const testPayload = [1, 2, 3];
    expect(categories(initialState, fetchSuccess(testPayload))).toEqual({
      ...initialState,
      isLoading: false,
      data: testPayload
    });
  });

  test("clearActive", () => {
    const initialState = {
      isLoading: false,
      data: [1, 2, 3],
      active: null
    };
    expect(categories(initialState, setActive(1))).toEqual({
      ...initialState,
      active: 1
    });
  });

  test("setActive", () => {
    const initialState = {
      isLoading: false,
      data: [1, 2, 3],
      active: 1
    };
    expect(categories(initialState, clearActive())).toEqual({
      ...initialState,
      active: null
    });
  });
});
