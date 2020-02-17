import React, { Component } from "react";
import SidebarClearButton from "./SidebarClearButton";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.clearActiveCategories();
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

export default Sidebar;
