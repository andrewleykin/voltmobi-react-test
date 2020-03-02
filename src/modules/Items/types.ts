import { ThunkAction } from "redux-thunk";
import { Action } from "redux-actions";

export type ItemIdType = number;

export type ItemType = {
  id: ItemIdType;
  name: string;
  descr: string;
  cost: number;
  categories: Array<number>;
  costCurrency?: string;
};

export type ArrayItemType = Array<ItemType>;

export type ItemsStateType = {
  isLoading: boolean;
  data: ArrayItemType;
};

export type ThunkType = ThunkAction<void, ItemsStateType, unknown, Action<any>>;
