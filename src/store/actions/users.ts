import { createAction } from "@reduxjs/toolkit/src";
import { User } from "@models/user.model";

export const editUserInfo = createAction<{
  user: User;
}>("USERS/EDIT_USER_INFO");
