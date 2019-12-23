export const currencyFilter = value => {
  return new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB"
  }).format(value);
};

export const checkEmail = value =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
