import { createAction } from "@reduxjs/toolkit";
import { User } from "@models/user.model";

export const editUserInfoAction = createAction<{
  user: User;
}>("USERS/EDIT_USER_INFO");
