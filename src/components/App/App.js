import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRequest as fetchItems } from "../../modules/Items";
import { fetchRequest as fetchCategories } from "../../modules/Categories";
import { fetchRequest as fetchCart } from "../../modules/Cart";
import { fetchRequest as fetchForm } from "../../modules/Form";
import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Item from "../Item";
import Cart from "../Cart";

class App extends Component {
  componentDidMount() {
    const { fetchItems, fetchCategories, fetchCart, fetchForm } = this.props;
    fetchItems();
    fetchCategories();
    fetchCart();
    fetchForm();
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/item/:id" component={Item} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  fetchItems,
  fetchCategories,
  fetchCart,
  fetchForm
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
