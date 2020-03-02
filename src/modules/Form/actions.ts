import { createAction } from "redux-actions";
import { ArrayFormItem, FormItem } from "./types";

export const FORM_FETCH_REQUEST = "FORM/FETCH_REQUEST";
export const FORM_FETCH_SUCCESS = "FORM/FETCH_SUCCESS";
export const FORM_ADD_FIELD = "FORM/ADD_FIELD";
export const FORM_CHANGE_FIELD = "FORM/CHANGE_FIELD";

export const fetchRequest = createAction(FORM_FETCH_REQUEST);
export const fetchSuccess = createAction<ArrayFormItem>(FORM_FETCH_SUCCESS);
export const addFieldActions = createAction<FormItem>(FORM_ADD_FIELD);
export const changeFieldActions = createAction<FormItem>(FORM_CHANGE_FIELD);
