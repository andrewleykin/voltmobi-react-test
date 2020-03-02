import React from "react";
import { NavLink } from "react-router-dom";
import { ComponentProps } from "./types";
import "./Header.css";

const Header: React.FC<ComponentProps> = ({ cartLength, cartTotalSum }) => {
  const cartLinkTextComputed: string = `В корзине ${cartLength} на сумму ${cartTotalSum}`;
  const cartLinkText: string =
    cartLength > 0 ? cartLinkTextComputed : "Корзина пуста";

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
