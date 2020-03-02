import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { fetchRequest, fetchSuccess, setActive, clearActive } from "./actions";
import { ArrayCategoriesItemType } from "./types";

const isLoading = handleActions<boolean, boolean>(
  {
    [fetchRequest.toString()]: () => true,
    [fetchSuccess.toString()]: () => false
  },
  false
);

const data = handleActions<ArrayCategoriesItemType, ArrayCategoriesItemType>(
  {
    [fetchRequest.toString()]: () => [],
    [fetchSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const active = handleActions<null | number, number>(
  {
    [setActive.toString()]: (_state, action) => action.payload,
    [clearActive.toString()]: () => null
  },
  null
);

export default combineReducers({
  isLoading,
  data,
  active
});
