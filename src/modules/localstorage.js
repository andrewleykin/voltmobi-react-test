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

export { load, save, clearLocal };
