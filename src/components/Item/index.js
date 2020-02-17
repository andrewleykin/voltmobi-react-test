import { connect } from "react-redux";
import { compose, branch, renderComponent } from "recompose";
import { getItemById } from "../../modules/Items";
import { getCategories } from "../../modules/Categories";

import Item from "./Item";
import ItemEmpty from "./ItemEmpty";

const mapStateToProps = (state, ownProps) => ({
  itemInfo: getItemById(state, ownProps.match.params.id),
  categories: getCategories(state)
});

const withConnect = connect(mapStateToProps);

const withBranch = compose(
  branch(({ itemInfo }) => !itemInfo, renderComponent(ItemEmpty))
);

const enhance = compose(withConnect, withBranch);

export default enhance(Item);
