import React from "react";
import ItemList from "../ItemList";
import Sidebar from "../Sidebar";
import CartForm from "./CartForm";
import CartWrap from "./CartWrap";
import "./Cart.css";
import CartActions from "./CartActions";
import { ComponentProps } from "./types";

const Cart: React.FC<ComponentProps> = ({
  clearCart,
  cart,
  cartLength,
  cartTotalSum
}) => {
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

export default Cart;
