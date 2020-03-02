import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { ITEMS_FETCH_REQUEST, ITEMS_FETCH_SUCCESS } from "./actions";
import { ItemType, ArrayItemType } from "./types";
import { currencyFilter } from "../utils";

const isLoading = handleActions<boolean, boolean>(
  {
    [ITEMS_FETCH_REQUEST]: () => true,
    [ITEMS_FETCH_SUCCESS]: () => false
  },
  false
);

const data = handleActions<ArrayItemType, ArrayItemType>(
  {
    [ITEMS_FETCH_REQUEST]: () => [],
    [ITEMS_FETCH_SUCCESS]: (_state, action): ArrayItemType =>
      action.payload.map(
        (el): ItemType => ({
          ...el,
          costCurrency: currencyFilter(el.cost)
        })
      )
  },
  []
);

export default combineReducers({
  isLoading,
  data
});
