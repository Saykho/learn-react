import { call, put, takeEvery } from "typed-redux-saga";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@models/user.model";
import { HttpClient } from "@httpClient/http-client";

export const editUserInfoAction = createAction<{
  user: User;
}>("USERS/EDIT_USER_INFO");

export const getUsersSuccess = createAction<User[]>("USERS/GET_USERS_SUCCESS");
export const getUsersFailure = createAction<{
  message: string;
}>("USERS/GET_USERS_FAILURE");
// interface GetUsersError {
//   message: string;
// }

const getUsersFromApi = async () => {
  const response = await HttpClient.get<User[]>(`users`);
  return response;
};

function* getUsers(): any {
  try {
    const users = yield call(getUsersFromApi);
    yield put(getUsersSuccess(users));
  } catch (error: any) {
    yield put(getUsersFailure);
  }
}

export function* watchGetUsers() {
  yield takeEvery(getUsersSuccess, getUsers);
}

// export const getUsers = createAsyncThunk<
//   User[],
//   undefined,
//   { rejectValue: GetUsersError }
// >(
//   "users/getUsers",
//
//   async (_, thunkAPI) => {
//     try {
//       return await HttpClient.get<User[]>(`users`);
//     } catch (error: any) {
//       const { message } = error.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   },
// );
