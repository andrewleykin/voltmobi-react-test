import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./modules";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default createAppStore;
