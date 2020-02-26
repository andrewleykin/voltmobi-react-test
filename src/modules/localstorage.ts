function load(localStorageKey: string) {
  const stringData: any = window.localStorage.getItem(localStorageKey);
  let data: any = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  return data;
}

function save(localStorageKey: string, data: any) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function clearLocal(localStorageKey: string) {
  window.localStorage.removeItem(localStorageKey);
}

const CART_LOCALSTORAGE_KEY: string = "cart";
const FORM_LOCALSTORAGE_KEY: string = "test-form";

export { load, save, clearLocal, CART_LOCALSTORAGE_KEY, FORM_LOCALSTORAGE_KEY };
