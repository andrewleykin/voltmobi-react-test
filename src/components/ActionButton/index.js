import { connect } from "react-redux";
import { getItemInCart, addToCart, removeToCart } from "../../modules/Cart";
import ActionButton from "./ActionButton";

const mapStateToProps = (state, { item }) => ({
  itemInCart: getItemInCart(state, item.id)
});
const mapDispatchToProps = { addToCart, removeToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
