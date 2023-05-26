import { all } from "typed-redux-saga";
import { watchUsersSaga } from "./user";

export function* watchSaga() {
  yield* all([watchUsersSaga()]);
}
