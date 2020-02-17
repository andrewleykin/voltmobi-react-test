import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../ActionButton";

const ItemListItem = ({ item }) => {
  const { id, name, costCurrency } = item;
  return (
    <div className="item-list__item">
      <Link
        to={`/item/${id}`}
        className="item-list__name"
      >{`${name} ${costCurrency}`}</Link>
      <ActionButton item={item} />
    </div>
  );
};

export default ItemListItem;
