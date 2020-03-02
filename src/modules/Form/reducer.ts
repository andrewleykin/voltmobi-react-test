import { combineReducers } from "redux";
import { handleActions, Action } from "redux-actions";
import {
  FORM_FETCH_REQUEST,
  FORM_FETCH_SUCCESS,
  FORM_ADD_FIELD,
  FORM_CHANGE_FIELD
} from "./actions";
import { ArrayFormItem, FormItem } from "./types";

const isLoading = handleActions<boolean, boolean>(
  {
    [FORM_FETCH_REQUEST]: () => true,
    [FORM_FETCH_SUCCESS]: () => false
  },
  false
);

type CombinedPayload = ArrayFormItem & FormItem;
const data = handleActions<ArrayFormItem, CombinedPayload>(
  {
    [FORM_FETCH_REQUEST]: () => [],
    [FORM_FETCH_SUCCESS]: (_state, action: Action<ArrayFormItem>) =>
      action.payload,
    [FORM_ADD_FIELD]: (_state, action: Action<FormItem>) => [
      ..._state,
      action.payload
    ],
    [FORM_CHANGE_FIELD]: (_state, action: Action<FormItem>) => {
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
