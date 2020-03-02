import { ArrayCategoriesItemType } from "../../modules/Categories";

export type ReduxStateProps = {
  categories: ArrayCategoriesItemType;
  activeCategories: number;
};

export type DispatchProps = {
  setActive: (active: number) => void;
  clearActive: () => void;
  fetchCategories: () => void;
};

export type ComponentProps = ReduxStateProps & DispatchProps;
