import { combineReducers } from "redux";
import { handleActions, ReduxCompatibleReducer } from "redux-actions";
import { fetchRequest, fetchSuccess } from "./actions";
import { currencyFilter } from "../utils";
import { ItemType } from "./selectors";

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
