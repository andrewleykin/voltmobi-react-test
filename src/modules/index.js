import { combineReducers } from "redux";
import categories from "./Categories";
import items from "./Items";
import cart from "./Cart";
import form from "./Form";

export default combineReducers({ categories, items, cart, form });
