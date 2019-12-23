import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import ItemList from "../ItemList";
import "./Main.css";
import { getFilterItems } from "../../modules/Items";

class Main extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="main-page">
        <div className="container main-page__wrap">
          <Sidebar />
          <ItemList items={items} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: getFilterItems(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
