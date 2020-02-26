import { InitialState } from "../index";

export type FormItem = {
  id: string;
  value: string;
};

export type FormStateType = {
  isLoading: boolean;
  data: Array<FormItem>;
};

export const getForm = (state: InitialState) => state.form.data;
