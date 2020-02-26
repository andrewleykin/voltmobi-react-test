import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "./actions";

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false
  },
  false
);

const isLoaded = handleActions(
  {
    [fetchRequest]: () => true
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: () => [],
    [fetchSuccess]: (_state, action) => action.payload,
    [addToCartActions]: (_state, action) => [..._state, action.payload],
    [removeToCartActions]: (_state, action) => [
      ..._state.filter(item => item.id !== action.payload)
    ],
    [clearCartActions]: () => []
  },
  []
);

export default combineReducers({
  isLoading,
  isLoaded,
  data
});
