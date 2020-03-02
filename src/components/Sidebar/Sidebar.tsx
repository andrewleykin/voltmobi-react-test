import React, { Component } from "react";
import SidebarClearButton from "./SidebarClearButton";
import SidebarItem from "./SidebarItem";
import { ComponentProps } from "./types";
import "./Sidebar.css";

class Sidebar extends Component<ComponentProps> {
  componentDidMount() {
    const { categories, fetchCategories } = this.props;
    if (categories.length === 0) fetchCategories();
  }

  setActiveCategories = (event: React.ChangeEvent<HTMLButtonElement>) => {
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
