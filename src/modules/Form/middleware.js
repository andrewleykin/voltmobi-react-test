import {
  fetchRequest,
  fetchSuccess,
  changeField as changeFieldActions,
  addField as addFieldActions
} from "./actions";
import { save, load, FORM_LOCALSTORAGE_KEY } from "../localstorage";
import { getForm } from "./selectors";

export const fetchForm = () => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(load(FORM_LOCALSTORAGE_KEY) || []));
};

export const changeField = payload => (dispatch, getState) => {
  dispatch(changeFieldActions(payload));
  save(FORM_LOCALSTORAGE_KEY, getForm(getState()));
};

export const addField = payload => (dispatch, getState) => {
  dispatch(addFieldActions(payload));
  save(FORM_LOCALSTORAGE_KEY, getForm(getState()));
};
