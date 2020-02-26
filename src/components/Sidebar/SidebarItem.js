import React from "react";
import PropTypes from "prop-types";

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

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
  setActiveCategories: PropTypes.func.isRequired,
  activeCategories: PropTypes.string.isRequired
};

export default SidebarItem;
