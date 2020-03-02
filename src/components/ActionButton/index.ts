import { connect } from "react-redux";
import { getItemInCart, addToCart, removeToCart } from "../../modules/Cart";
import ActionButton from "./ActionButton";
import { InitialState } from "../../modules";
import { ParentProps, ReduxStateProps, DispatchProps } from "./types";

const mapStateToProps = (
  state: InitialState,
  { item }: ParentProps
): ReduxStateProps => ({
  itemInCart: getItemInCart(state, item.id)
});

const mapDispatchToProps: DispatchProps = { addToCart, removeToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
