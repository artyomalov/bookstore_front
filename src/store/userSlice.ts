import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userRequests from '../api/userAPI/userRequests';
import {
  UserType,
  UpdateUserDataType,
  UpdateDeleteUserPasswordType,
} from '../types/userTypes';
import { AxiosError } from 'axios';
import { stat } from 'fs';

type SignInDataType = {
  email: string;
  password: string;
};

export const signInUser = createAsyncThunk<
  UserType,
  SignInDataType,
  { rejectValue: Error | AxiosError }
>('user/signInUser', async function (signInData, { rejectWithValue }) {
  try {
    const response = await userRequests.signInUser(
      signInData.email,
      signInData.password
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.toJSON);
  }
});

export const getUser = createAsyncThunk<
  UserType,
  string,
  { rejectValue: Error | AxiosError }
>('user/getUser', async function (id, { rejectWithValue }) {
  try {
    const response = await userRequests.getUser(id);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.toJson());
  }
});

export const updateUserData = createAsyncThunk<
  UserType,
  UpdateUserDataType,
  { rejectValue: Error | AxiosError }
>('user/updateUserData', async function (updateUserData, { rejectWithValue }) {
  try {
    const response = await userRequests.updateUserData(
      updateUserData.id,
      updateUserData.fullName,
      updateUserData.avatar
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.toJSON);
  }
});

export const updateUserPassword = createAsyncThunk<
  UserType,
  UpdateDeleteUserPasswordType,
  { rejectValue: Error | AxiosError }
>(
  'user/updateUserPassword',
  async function (updateUserPasswordData, { rejectWithValue }) {
    try {
      const response = await userRequests.updateUserPassword(
        updateUserPasswordData.id,
        updateUserPasswordData.password
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.toJSON);
    }
  }
);

type InitialStateType = {
  user: UserType;
  status: string | null;
  message: string | null;
};

const initialState: InitialStateType = {
  user: {
    id: 0,
    fullName: 'Name',
    avatar: 'avatar',
    userCart: [],
    likedByUser: [],
    listOfUsersPurchases: [],
  },
  status: null,
  message: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.user.id = action.payload.id;
        state.user.fullName = action.payload.fullName;
        state.user.avatar = action.payload.avatar;
        state.user.userCart = [...action.payload.userCart];
        state.user.likedByUser = [...action.payload.likedByUser];
        state.user.listOfUsersPurchases = [
          ...action.payload.listOfUsersPurchases,
        ];
        state.message = 'Got user';
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.message = 'Something went wrong. Please try again later';
      })
      .addCase(getUser.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.user.id = action.payload.id;
        state.user.fullName = action.payload.fullName;
        state.user.avatar = action.payload.avatar;
        state.user.userCart = [...action.payload.userCart];
        state.user.likedByUser = [...action.payload.likedByUser];
        state.user.listOfUsersPurchases = [
          ...action.payload.listOfUsersPurchases,
        ];
        state.message = 'Got user';
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.message = 'Something went wrong. Please try again later';
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.status = 'rending';
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user.fullName = action.payload.fullName;
        state.user.avatar = action.payload.avatar;
        state.status = 'fullfilled';
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = 'rejected';
        state.message = 'Something went wrong. Please try again later';
      })
      .addCase(updateUserPassword.pending, (state, action) => {
        state.status = 'pending';
      });
  },
});

export default userSlice.reducer;
