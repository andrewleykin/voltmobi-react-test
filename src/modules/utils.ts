type currencyFilterType = (value: number) => string;

export const currencyFilter: currencyFilterType = value => {
  return new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB"
  }).format(value);
};

type checkEmailType = (value: string) => boolean;
export const checkEmail: checkEmailType = value =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
