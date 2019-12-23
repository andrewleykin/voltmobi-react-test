import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { fetchRequest, fetchSuccess, addField, changeField } from "./actions";

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
    [addField]: (_state, action) => [..._state, action.payload],
    [changeField]: (_state, action) => {
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
