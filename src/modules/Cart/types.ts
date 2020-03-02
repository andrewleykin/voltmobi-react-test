import { ArrayItemType } from "../Items";
import { ThunkAction } from "redux-thunk";
import { InitialState } from "../index";
import {
  fetchRequest,
  fetchSuccess,
  addToCartActions,
  removeToCartActions,
  clearCartActions
} from "./actions";

export type CartStateType = {
  isLoaded: boolean;
  isLoading: boolean;
  data: ArrayItemType;
};

export type fetchRequestType = ReturnType<typeof fetchRequest>;
export type fetchSuccessType = ReturnType<typeof fetchSuccess>;
export type addToCartActionsType = ReturnType<typeof addToCartActions>;
export type removeToCartActionsType = ReturnType<typeof removeToCartActions>;
export type clearCartActionsType = ReturnType<typeof clearCartActions>;

export type ActionsType =
  | fetchRequestType
  | fetchSuccessType
  | addToCartActionsType
  | removeToCartActionsType
  | clearCartActionsType;

export type ThunkType = ThunkAction<void, InitialState, unknown, ActionsType>;
