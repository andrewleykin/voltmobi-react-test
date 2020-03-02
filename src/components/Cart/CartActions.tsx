import React from "react";

type ComponentProps = {
  cartLength: number;
  cartTotalSum: string;
  clearCart: () => void;
};

const CartActions: React.FC<ComponentProps> = ({
  cartLength,
  cartTotalSum,
  clearCart
}) => (
  <div className="cart-page__actions">
    <p>
      В корзине {cartLength} товара на сумму {cartTotalSum}
    </p>
    <button type="button" onClick={clearCart}>
      Очистить корзину
    </button>
  </div>
);

export default CartActions;
