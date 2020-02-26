import React from "react";
import PropTypes from "prop-types";

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

CartActions.propTypes = {
  cartLength: PropTypes.number,
  cartTotalSum: PropTypes.string,
  clearCart: PropTypes.func.isRequired
};

CartActions.defaultProps = {
  cartLength: 0,
  cartTotalSum: ""
};

export default CartActions;
