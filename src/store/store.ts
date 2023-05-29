import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { loadingReducer, userReducer } from "./reducers";
import { watchSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    users: userReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(watchSaga);
