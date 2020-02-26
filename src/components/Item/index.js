import { connect } from "react-redux";
import { compose, branch, renderComponent, lifecycle } from "recompose";
import { getItems, getItemById, fetchItems } from "../../modules/Items";
import { getCategories, fetchCategories } from "../../modules/Categories";

import Item from "./Item";
import ItemEmpty from "./ItemEmpty";

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state),
  itemInfo: getItemById(state, ownProps.match.params.id),
  categories: getCategories(state)
});

const mapDispathToProps = { fetchItems, fetchCategories };

const withConnect = connect(mapStateToProps, mapDispathToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    const { categories, items, fetchCategories, fetchItems } = this.props;
    if (categories.length === 0) fetchCategories();
    if (items.length === 0) fetchItems();
  }
});

const withBranch = compose(
  branch(({ itemInfo }) => !itemInfo, renderComponent(ItemEmpty))
);

const enhance = compose(withConnect, withLifecycle, withBranch);

export default enhance(Item);
