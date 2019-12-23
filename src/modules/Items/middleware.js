import { fetchRequest, fetchSuccess } from "./actions";
import items from "../../data/items.json";

export const itemsMiddleware = store => next => action => {
  if (action.type === fetchRequest.toString()) {
    setTimeout(() => store.dispatch(fetchSuccess(items)), 0);
  }
  return next(action);
};
