import React from "react";

type ComponentProps = {
  clearActiveCategories: () => void;
};

const SidebarClearButton: React.FC<ComponentProps> = ({
  clearActiveCategories
}) => {
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
