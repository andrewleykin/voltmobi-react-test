import { fetchRequest, fetchSuccess } from "./actions";
import categories from "../../data/categories.json";

export const fetchCategories = () => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(categories));
};
