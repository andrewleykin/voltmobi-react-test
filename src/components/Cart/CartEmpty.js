import React from "react";
import CartWrap from "./CartWrap";
import EmptyPage from "../EmptyPage";

const CartEmpty = () => (
  <CartWrap>
    <EmptyPage>В корзине нету товаров</EmptyPage>
  </CartWrap>
);

export default CartEmpty;
