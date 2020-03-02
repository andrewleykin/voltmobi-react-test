import React from "react";
import "./ActionButton.css";
import { ComponentProps } from "./types";

const ActionButton: React.FC<ComponentProps> = ({
  itemInCart,
  item,
  removeToCart,
  addToCart
}) => {
  const classesBtn: string = `btn ${itemInCart ? " delete" : ""}`;
  const textBtn: string = itemInCart ? "Удалить" : "Добавить";
  const clickHandler = (): void =>
    itemInCart ? removeToCart(item.id) : addToCart(item);

  return (
    <button type="button" className={classesBtn} onClick={clickHandler}>
      {textBtn}
    </button>
  );
};

export default ActionButton;
