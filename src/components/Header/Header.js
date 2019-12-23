import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCartLength, getCartTotalSum } from "../../modules/Cart";
import "./Header.css";

class Header extends Component {
  render() {
    const { cartLength, cartTotalSum } = this.props;
    return (
      <header>
        <div className="container header-wrap">
          <NavLink exact to="/">
            Online Shop
          </NavLink>
          <NavLink to="/cart">
            {cartLength > 0
              ? `В корзине ${cartLength} на сумму ${cartTotalSum}`
              : "Корзина пуста"}
          </NavLink>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});

export default connect(mapStateToProps)(Header);
