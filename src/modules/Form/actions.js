import { createAction } from "redux-actions";

export const fetchRequest = createAction("FORM/FETCH_REQUEST");
export const fetchSuccess = createAction("FORM/FETCH_SUCCESS");
export const addField = createAction("FORM/ADD_FIELD");
export const changeField = createAction("FORM/CHANGE_FIELD");
