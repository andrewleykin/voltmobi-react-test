import { combineReducers } from "redux";
import categories, { CategoriesStateType } from "./Categories";
import items, { ItemsStateType } from "./Items";
import cart, { CartStateType } from "./Cart";
import form, { FormStateType } from "./Form";

const rootReducer = combineReducers({ categories, items, cart, form });

export type InitialState = {
  cart: CartStateType;
  items: ItemsStateType;
  categories: CategoriesStateType;
  form: FormStateType;
};

export default rootReducer;
