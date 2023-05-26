import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userRequests from '../api/userAPI/userRequests';
import {
  UserType,
  UpdateUseDataType,
  UpdateDeleteUserPasswordType,
} from '../types/userTypes';

export const getUser = createAsyncThunk<
  UserType,
  number,
  { rejectValue: string }
>('user/getUser', async function (id, { rejectWithValue }) {
  
  const response = await userRequests.getUser(id);

  if (response.status !== 200) {
    return rejectWithValue(response.statusText);
  }

  return response.data;
});

export const patchUserData = createAsyncThunk<
  UserType,
  UpdateUseDataType,
  { rejectValue: string }
>('user/patchUserData', async function (updateUserData, { rejectWithValue }) {
  const response = await userRequests.updateUserData(
    updateUserData.id,
    updateUserData.fullName,
    updateUserData.avatar
  );

  if (response.status !== 200) {
    return rejectWithValue(response.statusText);
  }
  return response.data;
});

export const patchUserPassword = createAsyncThunk<
  UserType,
  UpdateDeleteUserPasswordType,
  { rejectValue: string }
>(
  'user/patchUserPassword',
  async function (updateUserPasswordData, { rejectWithValue }) {
    const response = await userRequests.updateUserPassword(
      updateUserPasswordData.id,
      updateUserPasswordData.password
    );

    if (response.status !== 200) {
      return rejectWithValue(response.statusText);
    }
    return response.data;
  }
);

// export const deleteUser = createAsyncThunk<
//   number,
//   UpdateDeleteUserPasswordType,
//   { rejectValue: string }
// >('user/deleteUser', async function (deleteUserData, { rejectWithValue }) {
//   const response = await userRequests.deleteUser(
//     deleteUserData.id,
//     deleteUserData.password
//   );

//   if (response.status !== 204) return rejectWithValue(response.statusText);

//   return response.data;
// });