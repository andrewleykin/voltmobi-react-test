import { connect } from "react-redux";
import { getCartLength, getCartTotalSum } from "../../modules/Cart";
import { InitialState } from "../../modules";
import { ReduxStateProps } from "./types";

import Header from "./Header";

const mapStateToProps = (state: InitialState): ReduxStateProps => ({
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});

export default connect(mapStateToProps)(Header);
