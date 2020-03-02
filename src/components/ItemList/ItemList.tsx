import React from "react";
import ItemListItem from "./ItemListItem";
import "./ItemList.css";
import { ArrayItemType } from "../../modules/Items";

type ComponentProps = {
  items: ArrayItemType;
};

const ItemList: React.FC<ComponentProps> = ({ items }: ComponentProps) => {
  if (items.length === 0) return <p>В данной категории нету товаров</p>;

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
