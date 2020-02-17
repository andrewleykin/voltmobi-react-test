import React from "react";

const CartActions = ({ cartLength, cartTotalSum, clearCart }) => (
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
