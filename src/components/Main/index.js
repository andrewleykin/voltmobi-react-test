import { connect } from "react-redux";
import { getFilterItems, fetchItems } from "../../modules/Items";

import Main from "./Main";

const mapStateToProps = state => ({
  items: getFilterItems(state)
});

const mapDispatchToProps = { fetchItems };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
