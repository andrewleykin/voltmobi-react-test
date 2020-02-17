import React from "react";

const SidebarClearButton = ({ clearActiveCategories }) => {
  return (
    <button
      type="button"
      onClick={clearActiveCategories}
      className="sidebar__item"
    >
      Убрать фильтр
    </button>
  );
};

export default SidebarClearButton;
