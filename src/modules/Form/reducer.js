import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchRequest,
  fetchSuccess,
  addFieldActions,
  changeFieldActions
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
    [addFieldActions]: (_state, action) => [..._state, action.payload],
    [changeFieldActions]: (_state, action) => {
      return [
        ..._state.map(item =>
          item.id === action.payload.id
            ? { ...item, value: action.payload.value }
            : item
        )
      ];
    }
  },
  []
);

export default combineReducers({
  isLoading,
  data
});
