import { connect } from "react-redux";
import {
  setActive,
  clearActive,
  getCategories,
  getActiveCategories,
  fetchCategories
} from "../../modules/Categories";

import Sidebar from "./Sidebar";

const mapStateToProps = state => ({
  categories: getCategories(state),
  activeCategories: getActiveCategories(state)
});
const mapDispatchToProps = { setActive, clearActive, fetchCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
