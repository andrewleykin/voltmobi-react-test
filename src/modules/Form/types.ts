import { ThunkAction } from "redux-thunk";
import { Action } from "redux-actions";
import { InitialState } from "../index";

export type FormItem = {
  id: string;
  value: string;
};

export type ArrayFormItem = Array<FormItem>;

export type FormStateType = {
  isLoading: boolean;
  data: ArrayFormItem;
};

export type ThunkType = ThunkAction<void, InitialState, unknown, Action<any>>;
