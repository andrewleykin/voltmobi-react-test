import React from "react";
import PropTypes from "prop-types";

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

SidebarClearButton.propTypes = {
  clearActiveCategories: PropTypes.func.isRequired
};

export default SidebarClearButton;
