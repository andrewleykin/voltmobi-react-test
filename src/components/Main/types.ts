import { ArrayItemType } from "../../modules/Items";

export type ReduxStateProps = {
  items: ArrayItemType;
};

export type DispatchProps = {
  fetchItems: () => void;
};

export type ComponentProps = ReduxStateProps & DispatchProps;
