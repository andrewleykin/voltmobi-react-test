import { connect } from "react-redux";
import {
  setActive,
  clearActive,
  getCategories,
  getActiveCategories,
  fetchCategories
} from "../../modules/Categories";
import { InitialState } from "../../modules";
import { ReduxStateProps, DispatchProps } from "./types";

import Sidebar from "./Sidebar";

const mapStateToProps = (state: InitialState): ReduxStateProps => ({
  categories: getCategories(state),
  activeCategories: getActiveCategories(state)
});

const mapDispatchToProps: DispatchProps = {
  setActive,
  clearActive,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
