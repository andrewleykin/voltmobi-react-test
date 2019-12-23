import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemInCart, addToCart, removeToCart } from "../../modules/Cart";
import "./ActionButton.css";

class ActionButton extends Component {
  classesBtn = () => {
    const { itemInCart } = this.props;
    return `btn ${itemInCart ? " delete" : ""}`;
  };

  clickHandler = () => {
    const { itemInCart, item, addToCart, removeToCart } = this.props;
    itemInCart ? removeToCart(item.id) : addToCart(item);
  };

  render() {
    const { itemInCart } = this.props;
    return (
      <button
        type="button"
        className={this.classesBtn()}
        onClick={this.clickHandler}
      >
        {itemInCart ? "Удалить" : "Добавить"}
      </button>
    );
  }
}

const mapStateToProps = (state, { item }) => ({
  itemInCart: getItemInCart(state, item.id)
});
const mapDispatchToProps = { addToCart, removeToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
