import {
  fetchRequest,
  fetchSuccess,
  changeFieldActions,
  addFieldActions
} from "./actions";
import { save, load, FORM_LOCALSTORAGE_KEY } from "../localstorage";
import { getForm } from "./selectors";
import { ThunkType, FormItem } from "./types";

export const fetchForm = (): ThunkType => dispatch => {
  dispatch(fetchRequest());
  dispatch(fetchSuccess(load(FORM_LOCALSTORAGE_KEY) || []));
};

export const changeField = (payload: FormItem): ThunkType => (
  dispatch,
  getState
) => {
  dispatch(changeFieldActions(payload));
  save(FORM_LOCALSTORAGE_KEY, getForm(getState()));
};

export const addField = (payload: FormItem): ThunkType => (
  dispatch,
  getState
) => {
  dispatch(addFieldActions(payload));
  save(FORM_LOCALSTORAGE_KEY, getForm(getState()));
};
