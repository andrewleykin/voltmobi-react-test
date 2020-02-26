import React from "react";
import PropTypes from "prop-types";
import "./ActionButton.css";

const ActionButton = ({ itemInCart, item, removeToCart, addToCart }) => {
  const classesBtn = `btn ${itemInCart ? " delete" : ""}`;
  const textBtn = itemInCart ? "Удалить" : "Добавить";
  const clickHandler = () =>
    itemInCart ? removeToCart(item.id) : addToCart(item);

  return (
    <button type="button" className={classesBtn} onClick={clickHandler}>
      {textBtn}
    </button>
  );
};

ActionButton.propTypes = {
  itemInCart: PropTypes.object,
  item: PropTypes.object.isRequired,
  removeToCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

ActionButton.defaultProps = {
  itemInCart: undefined
};

export default ActionButton;
