import { connect } from "react-redux";
import {
  getForm,
  addField,
  changeField,
  fetchForm
} from "../../../modules/Form";
import { InitialState } from "../../../modules";

import CartForm from "./CartForm";
import { ReduxStateProps, DispatchProps } from "./types";

const mapStateToProps = (state: InitialState): ReduxStateProps => ({
  stateFields: getForm(state)
});
const mapDispatchToProps: DispatchProps = { changeField, addField, fetchForm };

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
