import React from "react";
import { CategoriesItemType } from "../../modules/Categories";

type ComponentProps = {
  item: CategoriesItemType;
  setActiveCategories: (event: any) => void;
  activeCategories: number;
};

const SidebarItem: React.FC<ComponentProps> = ({
  item,
  setActiveCategories,
  activeCategories
}) => {
  const { id, title } = item;
  const itemClasses = (id: number) =>
    `sidebar__item${id === activeCategories ? " active" : ""}`;

  return (
    <button
      type="button"
      onClick={setActiveCategories}
      className={itemClasses(id)}
      id={id + ""}
    >
      {title}
    </button>
  );
};

export default SidebarItem;
