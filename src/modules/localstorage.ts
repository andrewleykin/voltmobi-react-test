import { ArrayItemType } from "./Items";
import { ArrayFormItem } from "./Form";

const CART_LOCALSTORAGE_KEY = "cart";
const FORM_LOCALSTORAGE_KEY = "test-form";

type localStorageKeyType =
  | typeof CART_LOCALSTORAGE_KEY
  | typeof FORM_LOCALSTORAGE_KEY;

type dataSaveType = ArrayItemType | ArrayFormItem;

function load(localStorageKey: localStorageKeyType) {
  const stringData: any = window.localStorage.getItem(localStorageKey);
  let data: any = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  return data;
}

function save(localStorageKey: localStorageKeyType, data: dataSaveType) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function clearLocal(localStorageKey: localStorageKeyType) {
  window.localStorage.removeItem(localStorageKey);
}

export { load, save, clearLocal, CART_LOCALSTORAGE_KEY, FORM_LOCALSTORAGE_KEY };
