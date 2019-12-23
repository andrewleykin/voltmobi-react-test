import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { fetchRequest, fetchSuccess } from "./actions";
import { currencyFilter } from "../utils";

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => [],
    [fetchSuccess]: (_state, action) => [
      ...action.payload.map(el => ({
        ...el,
        costCurrency: currencyFilter(el.cost)
      }))
    ]
  },
  []
);

export default combineReducers({
  isLoading,
  data
});
