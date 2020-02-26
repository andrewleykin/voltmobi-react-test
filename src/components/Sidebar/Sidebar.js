import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarClearButton from "./SidebarClearButton";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    const { categories, fetchCategories } = this.props;
    if (categories.length === 0) fetchCategories();
  }

  setActiveCategories = event => {
    const { setActive } = this.props;
    setActive(+event.target.id);
  };

  clearActiveCategories = () => {
    const { clearActive } = this.props;
    clearActive();
  };

  render() {
    const { categories, activeCategories } = this.props;
    return (
      <aside className="sidebar">
        {categories.map(item => (
          <SidebarItem
            key={item.id}
            item={item}
            setActiveCategories={this.setActiveCategories}
            activeCategories={activeCategories}
          />
        ))}
        {!!activeCategories && (
          <SidebarClearButton
            clearActiveCategories={this.clearActiveCategories}
          />
        )}
      </aside>
    );
  }
}

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  clearActive: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

export default Sidebar;
