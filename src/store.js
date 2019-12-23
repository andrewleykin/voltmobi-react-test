import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { categoriesMiddleware } from "./modules/Categories";
import { itemsMiddleware } from "./modules/Items";
import { cartMiddleware } from "./modules/Cart";
import { formMiddleware } from "./modules/Form";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(categoriesMiddleware),
      applyMiddleware(itemsMiddleware),
      applyMiddleware(cartMiddleware),
      applyMiddleware(formMiddleware),
      process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default createAppStore;
