import { takeEvery } from "typed-redux-saga";
import { getUsersRequestAction } from "@store/actions";
import { getUsersSaga } from "./getUsersSaga";

export function* watchUsersSaga() {
  yield takeEvery(getUsersRequestAction, getUsersSaga);
}
