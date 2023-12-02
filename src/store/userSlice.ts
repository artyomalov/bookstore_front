import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userRequests from '../api/userAPI/userRequests';
import {
  UserType,
  UpdateUserDataType,
  UpdateDeleteUserPasswordType,
} from '../types/userTypes';
import { AxiosError } from 'axios';
import { showNotification } from './notificationSlice';
import { AppDispatch } from '.';
import { notificationType } from '../types/notificationTypes';

export const getUser = createAsyncThunk<
  UserType,
  undefined,
  { rejectValue: Error | AxiosError }
>('user/getUser', async function (_, { rejectWithValue, dispatch }) {
  const response = await userRequests.getUser();

  if (response.data.email === undefined) {
    const dummy: UserType = {
      id: 0,
      email: 'not set',
      fullName: 'not set',
      avatar: 'not set',
      userLikedId: 0,
      userCartId: 0,
      userPurchasesId: 0,
    };
    dispatch(setUser(dummy));
    return dummy;
  }
  dispatch(setUser(response.data));
  return response.data;
});

export const updateUserData = createAsyncThunk<
  UserType,
  UpdateUserDataType,
  { rejectValue: Error | AxiosError; dispatch: AppDispatch }
>(
  'user/updateUserData',
  async function (updatedUserData, { rejectWithValue, dispatch }) {
    try {
      const response = await userRequests.updateUserData(updatedUserData);
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Your data has been updated',
          type: notificationType.Sucsess,
        })
      );
      return response.data;
    } catch (error: any) {
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Internal server error. Please reload the page.',
          type: notificationType.Error,
        })
      );
      return rejectWithValue(error);
    }
  }
);

type InitialStateType = {
  user: UserType;
};

const unauthorizedUser = {
  id: 0,
  email: 'not set',
  fullName: 'not set',
  avatar: 'not set',
  userLikedId: 0,
  userCartId: 0,
  userPurchasesId: 0,
};

const initialState: InitialStateType = {
  user: unauthorizedUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      const user = { ...action.payload };
      if (user.fullName === null) {
        user.fullName = 'Not set';
      }
      state.user = { ...user };
    },
    setUserUnauthrized(state, action) {
      state.user = unauthorizedUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        const user = { ...action.payload };
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user.fullName = action.payload.fullName;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatar;
      });
  },
});

export const { setUser, setUserUnauthrized } = userSlice.actions;

export default userSlice.reducer;
