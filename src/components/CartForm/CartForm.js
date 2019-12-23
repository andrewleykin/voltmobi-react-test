import React, { Component } from "react";
import { connect } from "react-redux";
import { getForm, changeField, addField } from "../../modules/Form";
import Input from "../Input";
import InputPhone from "../Input/InputPhone";
import { checkEmail } from "../../modules/utils";

class CartForm extends Component {
  constructor(props) {
    super(props);
    const staticFields = [
      {
        id: "fio",
        type: "text",
        label: "Ваша фамилия",
        placeholder: "Введите ФИО",
        value: "",
        error: "",
        errorEmpty: "Нужно указать имя",
        errorInvalid: "Имя указано не верно"
      },
      {
        id: "email",
        type: "text",
        label: "Ваш Email",
        placeholder: "Введите Email",
        value: "",
        error: "",
        errorEmpty: "Нужно указать email",
        errorInvalid: "Email указана не верно"
      },
      {
        id: "phone",
        label: "Ваш Телефон",
        placeholder: "Введите Телефон",
        value: "",
        error: "",
        errorEmpty: "Нужно указать телефон",
        errorInvalid: "Телефон указан не верно"
      }
    ];

    const { stateFields } = this.props;
    if (stateFields.length > 0) {
      staticFields.map(el => {
        const stateField = stateFields.find(item => item && item.id === el.id);
        el.value = stateField ? stateField.value : "";
      });
    }
    this.state = {
      fields: staticFields,
      isSubmited: false
    };
  }

  changeHandler = event => {
    event.persist();
    const {
      target: { id, value }
    } = event;
    const fields = [...this.state.fields];
    fields.map(el => (el.error = ""));
    fields.find(field => field.id === id).value = value;
    this.setState(fields);
  };

  blurHandler = event => {
    const { stateFields, changeField, addField } = this.props;
    const {
      target: { id, value }
    } = event;
    stateFields.find(el => el.id === id)
      ? changeField({ id, value })
      : addField({ id, value });
  };

  submitHandler = event => {
    event.preventDefault();
    const fields = [...this.state.fields];
    let valid = true;

    this.state.fields.map(field => {
      const curField = fields.find(el => el.id === field.id);
      curField.error = "";

      this.state.fields.map(({ id }) => {
        const curField = fields.find(el => el.id === id);
        curField.error = "";

        if (curField.value.length === 0) curField.error = curField.errorEmpty;

        if (id === "phone") {
          if (curField.value.length !== 16)
            curField.error = curField.errorInvalid;
        } else if (id === "email") {
          if (!checkEmail(curField.value))
            curField.error = curField.errorInvalid;
        }
      });
    });

    fields.map(el => (valid = el.error.length === 0));

    this.setState(valid ? { isSubmited: true } : fields);
  };

  render() {
    const { isSubmited, fields } = this.state;
    if (isSubmited) return <p>Заявка отправена, продолжаем покупки !</p>;
    return (
      <>
        <h2>Заполните форму</h2>
        <form action="#" onSubmit={this.submitHandler}>
          {fields.map(({ id, label, value, placeholder, error }) =>
            id === "phone" ? (
              <InputPhone
                key={id}
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                error={error}
                onChange={this.changeHandler}
                onBlur={this.blurHandler}
              />
            ) : (
              <Input
                key={id}
                id={id}
                label={label}
                placeholder={placeholder}
                value={value}
                error={error}
                onChange={this.changeHandler}
                onBlur={this.blurHandler}
              />
            )
          )}
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  stateFields: getForm(state)
});
const mapDispatchToProps = { changeField, addField };

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
