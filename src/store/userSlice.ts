import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userRequests from '../api/userAPI/userRequests';
import {
  UserType,
  UpdateUserDataType,
  UpdateDeleteUserPasswordType,
} from '../types/userTypes';
import { AxiosError } from 'axios';

export const getUser = createAsyncThunk<
  UserType,
  string,
  { rejectValue: Error | AxiosError }
>('user/getUser', async function (empty, { rejectWithValue, dispatch }) {
  try {
    const response = await userRequests.getUser();
    dispatch(setUser(response.data));
    
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const updateUserData = createAsyncThunk<
  UserType,
  UpdateUserDataType,
  { rejectValue: Error | AxiosError }
>('user/updateUserData', async function (updatedUserData, { rejectWithValue }) {
  try {
    const response = await userRequests.updateUserData(updatedUserData);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      rejectWithValue(error.response?.data);
    }
    return rejectWithValue(error);
  }
});

type InitialStateType = {
  user: UserType;
  status: string | null;
  message: string | null;
  isError: boolean;
};

const initialState: InitialStateType = {
  user: {
    email: 'email',
    fullName: 'name',
    avatar: 'avatar',
    userCart: [],
    likedByUser: [],
    listOfUsersPurchases: [],
  },
  status: null,
  message: 'Something went wrong. Please try again later',
  isError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      const user = { ...action.payload };
      if (user.fullName===null) {
        user.fullName = 'Not set';
      }
      state.user = user;
      
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'fullfilled';
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
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatar;
        state.status = 'fullfilled';
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = 'rejected';
        state.message = 'Something went wrong. Please try again later';
      });
  },
});

export const { setUser, setMessage, setIsError } = userSlice.actions;

export default userSlice.reducer;
