import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFilterCart,
  getCartLength,
  getCartTotalSum,
  clearCart
} from "../../modules/Cart";
import ItemList from "../ItemList";
import EmptyPage from "../EmptyPage";
import Sidebar from "../Sidebar";
import "./Cart.css";
import CartForm from "../CartForm";

class Cart extends Component {
  clearHandler = () => {
    const { clearCart, history } = this.props;
    clearCart();
    history.push("/");
  };

  render() {
    const { cartLength } = this.props;
    return (
      <div className="cart-page">
        <div className="container cart-page__wrap">
          {cartLength > 0 ? (
            this.renderCart()
          ) : (
            <EmptyPage>В корзине нету товаров</EmptyPage>
          )}
        </div>
      </div>
    );
  }

  renderCart = () => {
    const { cart, cartLength, cartTotalSum } = this.props;
    return (
      <>
        <Sidebar />
        <div className="cart-page__content">
          <h1>Корзина</h1>
          {cart.length > 0 ? (
            <ItemList items={cart} />
          ) : (
            "В данной категории нету товаров"
          )}
          <hr />
          <div className="cart-page__actions">
            <p>
              В корзине {cartLength} товара на сумму {cartTotalSum}
            </p>
            <button type="button" onClick={this.clearHandler}>
              Очистить корзину
            </button>
          </div>
          <hr />
          <CartForm />
        </div>
      </>
    );
  };
}

const mapStateToProps = state => ({
  cart: getFilterCart(state),
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});
const mapDispatchToProps = { clearCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
