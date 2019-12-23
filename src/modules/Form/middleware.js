import { fetchRequest, fetchSuccess, changeField, addField } from "./actions";
import { save, load } from "../localstorage";
import { getForm } from "./selectors";

export const formMiddleware = store => next => action => {
  const result = next(action);
  const formFields = getForm(store.getState());
  switch (action.type) {
    case fetchRequest.toString():
      store.dispatch(fetchSuccess(load("test-form") || []));
      break;
    case changeField.toString():
    case addField.toString():
      save("test-form", formFields);
      break;
    default:
      return;
  }

  return result;
};
