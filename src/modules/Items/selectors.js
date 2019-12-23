import { getActiveCategories } from "../Categories";

export const getItems = state => state.items.data;

export const getFilterItems = state => {
  const activeCategories = getActiveCategories(state);
  return !!activeCategories
    ? getItems(state).filter(
        el => el.categories.indexOf(activeCategories) !== -1
      )
    : getItems(state);
};

export const getItemById = (state, id) =>
  getItems(state).find(item => item.id === id);
