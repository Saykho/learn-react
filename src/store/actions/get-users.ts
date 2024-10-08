import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@models/user.model";
import { HttpClient } from "@httpClient/http-client";

interface GetUsersError {
  message: string;
}

export const getUsers = createAsyncThunk<
  User[],
  undefined,
  { rejectValue: GetUsersError }
>(
  "users/getUsers",

  async (_, thunkAPI) => {
    try {
      return await HttpClient.get<User[]>(`users`);
    } catch (error: any) {
      const { message } = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  },
);
