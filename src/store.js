import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./modules";

const loggerMiddleware = createLogger({
  collapsed: true
});

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...[thunkMiddleware, loggerMiddleware]),
      process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default createAppStore;
