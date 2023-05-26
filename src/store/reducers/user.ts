import { User } from "@models/user";
import { createReducer, createSelector } from "@reduxjs/toolkit";
import {
  editUserInfoAction,
  getUsersFailureAction,
  getUsersRequestAction,
  getUsersSuccessAction,
} from "@store/actions";

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

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editUserInfoAction, (state, { payload }) => {
      const foundUser = state.users.find((u) => u.id === payload.user.id);
      if (foundUser) {
        const { user } = payload;
        foundUser.name = user.name;
        foundUser.username = user.username;
        foundUser.email = user.email;
        foundUser.address.city = user.address.city;
        foundUser.address.street = user.address.street;
        foundUser.address.suite = user.address.suite;
      }
    })
    .addCase(getUsersRequestAction, (state) => {
      return {
        ...state,
        status: UsersStateStatus.loading,
      };
    })
    .addCase(getUsersSuccessAction, (state, { payload }) => {
      return {
        ...state,
        users: payload,
        status: UsersStateStatus.idle,
      };
    })
    .addCase(getUsersFailureAction, (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          error: payload.error,
        };
      }
      return {
        ...state,
        status: UsersStateStatus.idle,
      };
    });
});

type WithUsersState = {
  users: UsersState;
};

const usersStateSelector = (state: WithUsersState): UsersState => state.users;

export const getUsersSelector = createSelector(usersStateSelector, (state) => {
  return state.users;
});
