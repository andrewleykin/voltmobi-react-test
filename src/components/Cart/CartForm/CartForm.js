import React, { Component } from "react";
import Input from "../../Input";
import { checkEmail } from "../../../modules/utils";

class CartForm extends Component {
  constructor(props) {
    super(props);
    let staticFields = [
      {
        id: "fio",
        type: "text",
        label: "Ваше фио",
        placeholder: "Введите ФИО",
        value: "",
        error: "",
        errorEmpty: "Нужно указать имя",
        errorInvalid: "Имя указано не верно",
        validator: value => value.length >= 5
      },
      {
        id: "email",
        type: "text",
        label: "Ваш Email",
        placeholder: "Введите Email",
        value: "",
        error: "",
        errorEmpty: "Нужно указать email",
        errorInvalid: "Email указана не верно",
        validator: value => checkEmail(value)
      },
      {
        id: "phone",
        label: "Ваш Телефон",
        placeholder: "Введите Телефон",
        value: "",
        error: "",
        errorEmpty: "Нужно указать телефон",
        errorInvalid: "Телефон указан не верно",
        validator: value => value.length === 16
      }
    ];

    const { stateFields } = props;
    if (stateFields.length > 0) {
      staticFields = staticFields.map(el => {
        const stateField = stateFields.find(item => item && item.id === el.id);
        return {
          ...el,
          value: stateField ? stateField.value : ""
        };
      });
    }
    this.state = {
      fields: staticFields,
      isSubmited: false
    };
  }

  componentDidMount() {
    this.props.fetchForm();
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

    fields.map(item => {
      const errorText = !item.validator(item.value)
        ? item.errorInvalid
        : item.value.length === 0
        ? item.errorEmpty
        : "";

      return {
        ...item,
        error: errorText
      };
    });

    const valid = fields.filter(item => item.error.length === 0).length === 0;

    this.setState(valid ? { isSubmited: true } : fields);
  };

  render() {
    const { isSubmited, fields } = this.state;
    if (isSubmited) return <p>Заявка отправена, продолжаем покупки !</p>;
    return (
      <>
        <h2>Заполните форму</h2>
        <form action="#" onSubmit={this.submitHandler}>
          {fields.map(({ id, label, value, placeholder, error }) => (
            <Input
              key={id}
              id={id}
              label={label}
              placeholder={placeholder}
              value={value}
              error={error}
              onChange={this.changeHandler}
              onBlur={this.blurHandler}
              phone={id === "phone"}
            />
          ))}
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}

export default CartForm;
