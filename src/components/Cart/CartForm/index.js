import { connect } from "react-redux";
import {
  getForm,
  addField,
  changeField,
  fetchForm
} from "../../../modules/Form";

import CartForm from "./CartForm";

const mapStateToProps = state => ({
  stateFields: getForm(state)
});
const mapDispatchToProps = { changeField, addField, fetchForm };

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
