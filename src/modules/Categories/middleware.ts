import { fetchRequest, fetchSuccess } from "./actions";
import categories from "../../data/categories.json";
import { ThunkType } from "./types";

export const fetchCategories = (): ThunkType => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(categories));
};
