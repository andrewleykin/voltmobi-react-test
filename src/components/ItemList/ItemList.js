import React from "react";
import ItemListItem from "./ItemListItem";
import "./ItemList.css";

const ItemList = ({ items }) => {
  if (items.length === 0) return "В данной категории нету товаров";

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
