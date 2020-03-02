import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../ActionButton";
import { ItemType } from "../../modules/Items";

type ComponentProps = {
  item: ItemType;
};

const ItemListItem: React.FC<ComponentProps> = ({ item }) => {
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
