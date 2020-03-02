import { connect } from "react-redux";
import { getFilterItems, fetchItems } from "../../modules/Items";
import { InitialState } from "../../modules";

import { ReduxStateProps, DispatchProps } from "./types";
import Main from "./Main";

const mapStateToProps = (state: InitialState): ReduxStateProps => ({
  items: getFilterItems(state)
});

const mapDispatchToProps: DispatchProps = { fetchItems };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
