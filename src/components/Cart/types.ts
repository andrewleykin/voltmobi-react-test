import { ArrayItemType } from "../../modules/Items";

export type ReduxStateProps = {
  isLoaded: boolean;
  cart: ArrayItemType;
  cartLength: number;
  cartTotalSum: string;
};

export type DispatchProps = {
  clearCart: () => void;
  fetchCart: () => void;
};

export type ComponentProps = ReduxStateProps & DispatchProps;
