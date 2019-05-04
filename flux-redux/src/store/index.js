import { createStore, compose, applyMiddleware } from "redux";
import reduces from "./reducers";

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);

const store = createStore(reduces, composer);

export default store;
