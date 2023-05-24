import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@store/reducers/user";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export type AppDispatch = typeof store.dispatch;
