import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { fetchRequest, fetchSuccess, setActive, clearActive } from "./actions";

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
    [fetchSuccess]: (_state, action) => action.payload
  },
  []
);

const active = handleActions(
  {
    [setActive]: (_state, action) => action.payload,
    [clearActive]: () => ""
  },
  ""
);

export default combineReducers({
  isLoading,
  data,
  active
});
