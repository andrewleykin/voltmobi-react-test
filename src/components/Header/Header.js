import React from "react";
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

export default Header;
