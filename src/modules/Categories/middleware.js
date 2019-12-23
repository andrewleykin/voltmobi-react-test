import { fetchRequest, fetchSuccess } from "./actions";
import categories from "../../data/categories.json";

export const categoriesMiddleware = store => next => action => {
  if (action.type === fetchRequest.toString()) {
    setTimeout(() => store.dispatch(fetchSuccess(categories)), 0);
  }
  return next(action);
};
