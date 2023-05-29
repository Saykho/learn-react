import { call, delay, put, SagaGenerator } from "typed-redux-saga";
import { HttpClient } from "@httpClient/httpClient";
import { User } from "@models/user";
import {
  getUsersFailureAction,
  getUsersSuccessAction,
  setLoadingAction,
} from "@store/actions";
import { LoadingSlot } from "@enums/loadingSlot";

export function* getUsersSaga(): SagaGenerator<void> {
  yield* put(
    setLoadingAction({
      slot: LoadingSlot.GET_USERS,
      loading: true,
    }),
  );
  try {
    const users = yield* call(HttpClient.get<User[]>, `users`);
    yield* delay(1000);
    yield* put(getUsersSuccessAction(users));
  } catch (error: any) {
    yield* put(getUsersFailureAction(error));
  } finally {
    yield* put(
      setLoadingAction({
        slot: LoadingSlot.GET_USERS,
        loading: false,
      }),
    );
  }
}
