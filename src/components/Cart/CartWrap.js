import React from "react";
import PropTypes from "prop-types";

const CartWrap = ({ children }) => (
  <div className="cart-page">
    <div className="container cart-page__wrap">{children}</div>
  </div>
);

CartWrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartWrap;
