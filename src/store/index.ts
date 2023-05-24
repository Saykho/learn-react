// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { userReducer } from "@store/reducers/user";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
