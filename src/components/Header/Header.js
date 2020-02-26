import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ cartLength, cartTotalSum }) => {
  const cartLinkTextComputed = `В корзине ${cartLength} на сумму ${cartTotalSum}`;
  const cartLinkText = cartLength > 0 ? cartLinkTextComputed : "Корзина пуста";

  return (
    <header>
      <div className="container header-wrap">
        <NavLink exact to="/">
          Online Shop
        </NavLink>
        <NavLink to="/cart">{cartLinkText}</NavLink>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartLength: PropTypes.number,
  cartTotalSum: PropTypes.string
};

Header.defaultProps = {
  cartLength: 0,
  cartTotalSum: ""
};

export default Header;
