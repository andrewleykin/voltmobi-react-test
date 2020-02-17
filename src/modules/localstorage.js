function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  return data;
}

function save(localStorageKey, data) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function clearLocal(localStorageKey) {
  window.localStorage.removeItem(localStorageKey);
}

const CART_LOCALSTORAGE_KEY = "cart";
const FORM_LOCALSTORAGE_KEY = "test-form";

export { load, save, clearLocal, CART_LOCALSTORAGE_KEY, FORM_LOCALSTORAGE_KEY };
