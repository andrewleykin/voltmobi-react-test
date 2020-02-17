import { connect } from "react-redux";
import {
  getItemInCart,
  thunkAddToCart,
  thunkRemoveToCart
} from "../../modules/Cart";
import ActionButton from "./ActionButton";

const mapStateToProps = (state, { item }) => ({
  itemInCart: getItemInCart(state, item.id)
});
const mapDispatchToProps = {
  addToCart: thunkAddToCart,
  removeToCart: thunkRemoveToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
