import React, { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const CartWrap: React.FC<ComponentProps> = ({ children }) => (
  <div className="cart-page">
    <div className="container cart-page__wrap">{children}</div>
  </div>
);

export default CartWrap;
