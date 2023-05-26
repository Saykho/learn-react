import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "./reducers";
import { watchSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(watchSaga);
export type AppDispatch = typeof store.dispatch;
