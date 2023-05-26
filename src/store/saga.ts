// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from "redux-saga";
import { userReducer } from "@store/reducers";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run();
