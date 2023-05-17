import { User } from "@models/user.model";
import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "@store/actions/get-users";
// eslint-disable-next-line import/no-cycle
import { RootState } from "@store/index";

export enum UsersStateStatus {
  idle = "idle",
  loading = "loading",
}

export interface UsersState {
  users: User[];
  error: null | string;
  status: UsersStateStatus;
  loading: boolean;
}

const initialState: UsersState = {
  users: [],
  error: null,
  status: UsersStateStatus.idle,
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = UsersStateStatus.loading;
      // eslint-disable-next-line no-param-reassign
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.users = payload;
      // eslint-disable-next-line no-param-reassign
      state.status = UsersStateStatus.idle;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      if (payload) {
        // eslint-disable-next-line no-param-reassign
        state.error = payload.message;
      }
      // eslint-disable-next-line no-param-reassign
      state.status = UsersStateStatus.idle;
    });
  },
});

export default usersSlice.reducer;

export const selectUsers = (state: RootState) => state.users.users;
export const selectStatus = (state: RootState) => state.users.status;
export const selectUsersLoading = (state: RootState) =>
  state.users.status === UsersStateStatus.loading;
