import { connect } from "react-redux";
import { getCartLength, getCartTotalSum } from "../../modules/Cart";

import Header from "./Header";

const mapStateToProps = state => ({
  cartLength: getCartLength(state),
  cartTotalSum: getCartTotalSum(state)
});

export default connect(mapStateToProps)(Header);
