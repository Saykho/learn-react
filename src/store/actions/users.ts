import { createAction } from "@reduxjs/toolkit";
import { User } from "@models/user";

export const editUserInfoAction = createAction<{
  user: User;
}>("USERS/EDIT_USER_INFO");

export const getUsersRequestAction = createAction("USERS/GET_USERS_REQUEST");
export const getUsersSuccessAction = createAction<User[]>(
  "USERS/GET_USERS_SUCCESS",
);
export const getUsersFailureAction = createAction<{
  error: any;
}>("USERS/GET_USERS_FAILURE");
