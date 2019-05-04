import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleaware from "redux-saga";

import reduces from "./reducers";
import sagas from "./sagas";
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleaware(sagaMonitor);
const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);

const store = createStore(reduces, composer);
sagaMiddleware.run(sagas);
export default store;
