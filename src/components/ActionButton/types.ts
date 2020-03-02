import { ItemType, ItemIdType } from "../../modules/Items";

export type ParentProps = {
  item: ItemType;
};

export type ReduxStateProps = {
  itemInCart: ItemType | undefined;
};

export type DispatchProps = {
  removeToCart: (id: ItemIdType) => void;
  addToCart: (item: ItemType) => void;
};

export type ComponentProps = ReduxStateProps & DispatchProps & ParentProps;
