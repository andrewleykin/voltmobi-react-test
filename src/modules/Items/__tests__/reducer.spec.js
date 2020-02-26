import reducer, { fetchRequest, fetchSuccess } from "../index";
import { currencyFilter } from "../../utils";

describe("items reducer", () => {
  test("fetchRequest", () => {
    const initialState = {
      isLoading: false,
      data: []
    };

    expect(reducer(initialState, fetchRequest())).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  test("fetchSuccess", () => {
    const initialState = {
      isLoading: true,
      data: []
    };

    const testPayload = [{ id: 1, cost: 200 }];

    expect(reducer(initialState, fetchSuccess(testPayload))).toEqual({
      isLoading: false,
      data: [{ id: 1, cost: 200, costCurrency: currencyFilter(200) }]
    });
  });
});
