import React from "react";

const SidebarItem = ({ item, setActiveCategories, activeCategories }) => {
  const { id, title } = item;
  const itemClasses = id =>
    `sidebar__item${id === activeCategories ? " active" : ""}`;
  return (
    <button
      type="button"
      onClick={setActiveCategories}
      className={itemClasses(id)}
      id={id}
    >
      {title}
    </button>
  );
};

export default SidebarItem;
