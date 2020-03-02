import React, { Component } from "react";
import Input from "../../Input";
import { checkEmail } from "../../../modules/utils";
import {
  ComponentProps,
  ComponentState,
  BasicFieldItem,
  FieldItem
} from "./types";

class CartForm extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
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
        validator: (value: string) => value.length >= 5
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
        validator: (value: string) => checkEmail(value)
      },
      {
        id: "phone",
        type: "text",
        label: "Ваш Телефон",
        placeholder: "Введите Телефон",
        value: "",
        error: "",
        errorEmpty: "Нужно указать телефон",
        errorInvalid: "Телефон указан не верно",
        validator: (value: string) => value.length === 16
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
    const { stateFields, fetchForm } = this.props;
    if (stateFields.length === 0) fetchForm();
  }

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const {
      target: { id, value }
    } = event;
    const fields: Array<FieldItem> = [...this.state.fields];
    fields.find(field => field.id === id)!.value = value;
    fields.find(field => field.id === id)!.error = "";
    this.setState({ fields });
    this.changeStore({ id, value });
  };

  changeStore = ({ id, value }: BasicFieldItem) => {
    const { stateFields, changeField, addField } = this.props;
    stateFields.find(el => el.id === id)
      ? changeField({ id, value })
      : addField({ id, value });
  };

  submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const fields: Array<FieldItem> = [...this.state.fields];

    fields.forEach(item => {
      item.error =
        item.value.length === 0
          ? item.errorEmpty
          : !item.validator(item.value)
          ? item.errorInvalid
          : "";
    });

    const valid: boolean =
      fields.filter(item => !item.error).length === fields.length;

    if (valid) {
      this.setState({ isSubmited: true });
    } else {
      this.setState({ fields });
    }
  };

  render() {
    const { isSubmited, fields } = this.state;
    if (isSubmited) return <p>Заявка отправена, продолжаем покупки !</p>;
    return (
      <>
        <h2>Заполните форму</h2>
        <form action="#" onSubmit={this.submitHandler}>
          {fields.map(({ id, ...props }) => (
            <Input
              key={id}
              id={id}
              onChange={this.changeHandler}
              phone={id === "phone"}
              {...props}
            />
          ))}
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}

export default CartForm;
