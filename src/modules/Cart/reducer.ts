import { combineReducers } from "redux";
import { handleActions, Action } from "redux-actions";
import {
  CART_FETCH_REQUEST,
  CART_FETCH_SUCCESS,
  CART_ADD_TO_CART,
  CART_REMOVE_TO_CART,
  CART_CLEAR_CART
} from "./actions";
import { ArrayItemType, ItemType, ItemIdType } from "../Items";

const isLoading = handleActions<boolean, boolean>(
  {
    [CART_FETCH_REQUEST]: () => true,
    [CART_FETCH_SUCCESS]: () => false
  },
  false
);

const isLoaded = handleActions<boolean, boolean>(
  {
    [CART_FETCH_REQUEST]: () => true
  },
  false
);

type CombinePayload = ArrayItemType & ItemType & ItemIdType;

const data = handleActions<ArrayItemType, CombinePayload>(
  {
    [CART_FETCH_REQUEST]: () => [],
    [CART_FETCH_SUCCESS]: (_state, action: Action<ArrayItemType>) =>
      action.payload,
    [CART_ADD_TO_CART]: (_state, action: Action<ItemType>) => [
      ..._state,
      action.payload
    ],
    [CART_REMOVE_TO_CART]: (_state, action: Action<ItemIdType>) => [
      ..._state.filter(item => item.id !== action.payload)
    ],
    [CART_CLEAR_CART]: () => []
  },
  []
);

export default combineReducers({
  isLoading,
  isLoaded,
  data
});
