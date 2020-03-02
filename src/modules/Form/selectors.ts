import { InitialState } from "../index";
import { ArrayFormItem } from "./types";

export const getForm = (state: InitialState): ArrayFormItem => state.form.data;
