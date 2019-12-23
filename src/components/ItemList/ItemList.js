import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";
import ActionButton from "../ActionButton/ActionButton";

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return <div className="item-list">{items.map(this.renderItem)}</div>;
  }

  renderItem = item => (
    <div className="item-list__item" key={item.id}>
      <Link
        to={`/item/${item.id}`}
        className="item-list__name"
      >{`${item.name} ${item.costCurrency}`}</Link>
      <ActionButton item={item} />
    </div>
  );
}

export default ItemList;
