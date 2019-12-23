import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sidebar.css";
import {
  setActive,
  clearActive,
  getCategories,
  getActiveCategories
} from "../../modules/Categories";

class Sidebar extends Component {
  componentDidMount() {
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

  itemClasses = id => {
    const { activeCategories } = this.props;
    return `sidebar__item${id === activeCategories ? " active" : ""}`;
  };

  render() {
    const { categories, activeCategories } = this.props;
    return (
      <aside className="sidebar">
        {categories.map(this.renderItem)}
        {!!activeCategories && this.renderClearButton()}
      </aside>
    );
  }

  renderItem = ({ title, id }) => (
    <button
      type="button"
      onClick={this.setActiveCategories}
      className={this.itemClasses(id)}
      key={id}
      id={id}
    >
      {title}
    </button>
  );

  renderClearButton = () => (
    <button
      type="button"
      onClick={this.clearActiveCategories}
      className="sidebar__item"
    >
      Убрать фильтр
    </button>
  );
}

const mapStateToProps = state => ({
  categories: getCategories(state),
  activeCategories: getActiveCategories(state)
});
const mapDispatchToProps = { setActive, clearActive };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
