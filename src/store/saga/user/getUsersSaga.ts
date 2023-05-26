import { call, delay, put, SagaGenerator } from "typed-redux-saga";
import { HttpClient } from "@httpClient/httpClient";
import { User } from "@models/user";
import { getUsersFailureAction, getUsersSuccessAction } from "@store/actions";

export function* getUsersSaga(): SagaGenerator<void> {
  try {
    const users = yield* call(HttpClient.get<User[]>, `users`);
    yield* delay(1000);
    yield* put(getUsersSuccessAction(users));
  } catch (error: any) {
    yield* put(getUsersFailureAction(error));
  }
}
