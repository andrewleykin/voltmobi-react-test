import { connect } from "react-redux";
import { compose, branch, renderComponent, lifecycle } from "recompose";
import {
  getFilterCart,
  getCartLength,
  getCartTotalSum,
  clearCart,
  fetchCart,
  getIsLoadedCart
} from "../../modules/Cart";
import { InitialState } from "../../modules";

import Cart from "./Cart";
import CartEmpty from "./CartEmpty";
import { ReduxStateProps, DispatchProps, ComponentProps } from "./types";

const mapStateToProps = (state: InitialState): ReduxStateProps => ({
  isLoaded: getIsLoadedCart(state),
  cart: getFilterCart(state),
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});

const mapDispatchToProps: DispatchProps = { clearCart, fetchCart };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle<ComponentProps, {}>({
  componentDidMount() {
    const { isLoaded, fetchCart } = this.props;
    if (!isLoaded) fetchCart();
  }
});

const withBranch = compose<ComponentProps, {}>(
  branch<ComponentProps>(
    ({ cartLength }) => cartLength === 0,
    renderComponent(CartEmpty)
  )
);

const enhance = compose<ComponentProps, {}>(
  withConnect,
  withLifecycle,
  withBranch
);

export default enhance(Cart);
