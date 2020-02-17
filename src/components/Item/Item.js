import React from "react";
import ActionButton from "../ActionButton";
import ItemWrap from "./ItemWrap";

const Item = ({ categories, itemInfo }) => {
  const getCategoryName = id => {
    return categories.length > 0
      ? categories.find(item => item.id === id).title
      : "";
  };

  return (
    <ItemWrap>
      <h1>{itemInfo.name}</h1>
      <p>{itemInfo.descr}</p>
      <h3>Цена: {itemInfo.costCurrency}</h3>
      <ul>
        {itemInfo.categories.map(cat => (
          <li key={cat}>{getCategoryName(cat)}</li>
        ))}
      </ul>
      <ActionButton item={itemInfo} />
    </ItemWrap>
  );
};

export default Item;
