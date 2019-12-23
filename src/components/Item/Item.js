import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemById } from "../../modules/Items";
import { getCategories } from "../../modules/Categories";
import ActionButton from "../ActionButton";
import EmptyPage from "../EmptyPage";

class Item extends Component {
  getCategoryName = id => {
    const { categories } = this.props;
    return categories.length > 0
      ? categories.find(item => item.id === id).title
      : "";
  };

  render() {
    const { itemInfo } = this.props;
    return (
      <div className="item-page">
        <div className="container">
          {itemInfo ? (
            this.renderItemInfo()
          ) : (
            <EmptyPage>Такого товара нету</EmptyPage>
          )}
        </div>
      </div>
    );
  }

  renderItemInfo = () => {
    const { itemInfo } = this.props;
    const { name, descr, costCurrency, categories } = itemInfo;
    return (
      <>
        <h1>{name}</h1>
        <p>{descr}</p>
        <h3>Цена: {costCurrency}</h3>
        <ul>
          {categories.map(cat => (
            <li key={cat}>{this.getCategoryName(cat)}</li>
          ))}
        </ul>
        <ActionButton item={itemInfo} />
      </>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  itemInfo: getItemById(state, ownProps.match.params.id),
  categories: getCategories(state)
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
