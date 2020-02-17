import { connect } from "react-redux";
import { compose, branch, renderComponent, lifecycle } from "recompose";
import {
  getFilterCart,
  getCartLength,
  getCartTotalSum,
  clearCart,
  fetchCart
} from "../../modules/Cart";

import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

const mapStateToProps = state => ({
  cart: getFilterCart(state),
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});

const mapDispatchToProps = { clearCart, fetchCart };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withBranch = compose(
  branch(({ cartLength }) => cartLength === 0, renderComponent(CartEmpty))
);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { cart, fetchCart } = this.props;
    if (!cart.length) {
      fetchCart();
    }
  }
});

const enhance = compose(withConnect, withLifecycle, withBranch);

export default enhance(Cart);
