import { fetchRequest, fetchSuccess } from "./actions";
import { ThunkType } from "./types";
import items from "../../data/items.json";

export const fetchItems = (): ThunkType => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(items));
};
