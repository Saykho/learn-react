import { User } from "@models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "@store/actions/get-users";
// eslint-disable-next-line import/no-cycle
import { RootState } from "@store/index";
import { createReducer } from "@reduxjs/toolkit/src";
import { editUserInfo } from "@store/actions/users";

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

// TODO: createReducer
export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editUserInfo, (state, { payload }) => {
      const foundUser = state.users.find((u) => u.id === payload.user.id);
      if (foundUser) {
        foundUser.name = payload.user.name;
        foundUser.username = payload.user.username;
        foundUser.email = payload.user.email;
        foundUser.address.city = payload.user.address.city;
        foundUser.address.street = payload.user.address.street;
        foundUser.address.suite = payload.user.address.suite;
      }
    })
    .addCase(getUsers.pending, (state) => {
      return {
        ...state,
        status: UsersStateStatus.loading,
        error: null,
      };
    })
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      return {
        ...state,
        users: payload,
        status: UsersStateStatus.idle,
      };
    })
    .addCase(getUsers.rejected, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          error: payload.message,
        };
      }
      return {
        ...state,
        status: UsersStateStatus.idle,
      };
    });
});

// export const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     editUserInfoTest: (state, { payload }: PayloadAction<User>) => {
//       const foundUser = state.users.find((u) => u.id === payload.id);
//       if (foundUser) {
//         foundUser.name = payload.name;
//         foundUser.username = payload.username;
//         foundUser.email = payload.email;
//         foundUser.address.city = payload.address.city;
//         foundUser.address.street = payload.address.street;
//         foundUser.address.suite = payload.address.suite;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUsers.pending, (state) => {
//       return {
//         ...state,
//         status: UsersStateStatus.loading,
//         error: null,
//       };
//     });
//     builder.addCase(getUsers.fulfilled, (state, { payload }) => {
//       return {
//         ...state,
//         users: payload,
//         status: UsersStateStatus.idle,
//       };
//     });
//     builder.addCase(getUsers.rejected, (state, { payload }) => {
//       if (payload) {
//         // eslint-disable-next-line no-param-reassign
//         state.error = payload.message;
//       }
//       // eslint-disable-next-line no-param-reassign
//       state.status = UsersStateStatus.idle;
//     });
//   },
// });

export const

// export const { editUserInfoTest } = usersSlice.actions;
// export default usersSlice.reducer;
//
// export const selectUsers = (state: RootState) => state.users.users;
// export const selectStatus = (state: RootState) => state.users.status;
// export const selectUsersLoading = (state: RootState) =>
//   state.users.status === UsersStateStatus.loading;
