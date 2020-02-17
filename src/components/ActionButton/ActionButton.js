import React from "react";
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

export default ActionButton;
