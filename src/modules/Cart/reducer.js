import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchRequest,
  fetchSuccess,
  addToCart,
  removeToCart,
  clearCart
} from "./actions";

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
    [fetchSuccess]: (_state, action) => action.payload,
    [addToCart]: (_state, action) => [..._state, action.payload],
    [removeToCart]: (_state, action) => [
      ..._state.filter(item => item.id !== action.payload)
    ],
    [clearCart]: () => []
  },
  []
);

export default combineReducers({
  isLoading,
  data
});
