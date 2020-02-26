import React from "react";
import PropTypes from "prop-types";
import ItemList from "../ItemList";
import Sidebar from "../Sidebar";
import CartForm from "./CartForm";
import CartWrap from "./CartWrap";
import "./Cart.css";
import CartActions from "./CartActions";

const Cart = ({ clearCart, cart, cartLength, cartTotalSum }) => {
  return (
    <CartWrap>
      <Sidebar />
      <div className="cart-page__content">
        <h1>Корзина</h1>
        <ItemList items={cart} />
        <hr />
        <CartActions
          cartLength={cartLength}
          cartTotalSum={cartTotalSum}
          clearCart={clearCart}
        />
        <hr />
        <CartForm />
      </div>
    </CartWrap>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  cartLength: PropTypes.number,
  cartTotalSum: PropTypes.string,
  clearCart: PropTypes.func.isRequired
};

Cart.defaultProps = {
  cart: [],
  cartLength: 0,
  cartTotalSum: ""
};

export default Cart;
