import { ArrayFormItem, FormItem } from "../../../modules/Form";

export type ReduxStateProps = {
  stateFields: ArrayFormItem;
};

export type DispatchProps = {
  changeField: (formItem: FormItem) => void;
  addField: (formItem: FormItem) => void;
  fetchForm: () => void;
};

export type ComponentProps = ReduxStateProps & DispatchProps;

export type BasicFieldItem = {
  id: string;
  value: string;
};

export interface FieldItem extends BasicFieldItem {
  type: string;
  label: string;
  placeholder: string;
  error: string;
  errorEmpty: string;
  errorInvalid: string;
  validator: (value: string) => boolean;
}

export type ComponentState = {
  isSubmited: boolean;
  fields: Array<FieldItem>;
};
