import { fetchRequest, fetchSuccess } from "./actions";
import items from "../../data/items.json";

export const fetchItems = () => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(items));
};
