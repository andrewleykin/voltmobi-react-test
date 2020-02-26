import { getForm } from "../index";

describe("form selectors", () => {
  const state = {
    form: {
      data: [1]
    }
  };
  test("getForm", () => {
    expect(getForm(state)).toEqual(state.form.data);
  });
});
