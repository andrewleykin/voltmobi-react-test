import { createAction } from "redux-actions";

export const fetchRequest = createAction("FORM/FETCH_REQUEST");
export const fetchSuccess = createAction("FORM/FETCH_SUCCESS");
export const addFieldActions = createAction("FORM/ADD_FIELD");
export const changeFieldActions = createAction("FORM/CHANGE_FIELD");
