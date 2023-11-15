import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import userStaffRequests from '../api/userStaffAPI/userStaffRequests';
import { AxiosError } from 'axios';
import {
  UserLikedType,
  GetUserCartType,
  UpdateUSerCartType,
  getUserPurchasesType,
} from '../types/userStaffTypes';
import { BookType } from '../types/bookTypes';
import { error } from 'console';
import { act } from '@testing-library/react';

export const getLikedBooks = createAsyncThunk<
  UserLikedType[],
  number,
  { rejectValue: Error | AxiosError }
>('userStaff/getLiked', async (userId, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.getUserLikedBooks(userId);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const addToLiked = createAsyncThunk<
  UserLikedType,
  { id: number; bookSlug: string },
  { rejectValue: Error | AxiosError }
>('userStaff/addToLiked', async (params, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.addToLiked(
      params.id,
      params.bookSlug
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const getUserCart = createAsyncThunk<
  GetUserCartType[],
  number,
  { rejectValue: Error | AxiosError }
>('userStaff/getCart', async (id, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.getUserCart(id);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type UpdataUserCartSliceType = UpdateUSerCartType & {
  id: number;
};
type UpdataUserCartResponseType = {
  completed: string;
};

export const updateUserCart = createAsyncThunk<
  UpdataUserCartResponseType | undefined,
  UpdataUserCartSliceType,
  { rejectValue: Error | AxiosError }
>('userStaff/updateCart', async (updateCartData, { rejectWithValue }) => {
  try {
    if (
      updateCartData.operationType === 'add' &&
      updateCartData.bookSlug &&
      updateCartData.coverType &&
      updateCartData.price
    ) {
      const response = await userStaffRequests.updateUserCart({
        operationType: updateCartData.operationType,
        id: updateCartData.id,
        bookSlug: updateCartData.bookSlug,
        coverType: updateCartData.coverType,
        price: updateCartData.price,
      });
      if (response) return response.data;
    }
    if (
      updateCartData.operationType === 'remove' &&
      updateCartData.cartItemId
    ) {
      const response = await userStaffRequests.updateUserCart({
        operationType: updateCartData.operationType,
        id: updateCartData.id,
      });
      if (response) return response.data;
    }
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type updateCartQuantityResponseType = {
  updated: boolean;
};

type updateCartQuantityParamsType = {
  id: number;
  operationType: string;
};

export const updateCartItemQuantity = createAsyncThunk<
  updateCartQuantityResponseType,
  updateCartQuantityParamsType,
  { rejectValue: Error | AxiosError }
>('userStaff/updateCartItemQuantity', async (params, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.updateCartItemQuantity(
      params.id,
      params.operationType
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const getUserPurchases = createAsyncThunk<
  getUserPurchasesType[],
  number,
  { rejectValue: Error | AxiosError }
>('userStaff/purchases', async (id, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.getUserPurchases(id);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  userLiked: UserLikedType[];
  userCart: GetUserCartType[];
  userPurchases: getUserPurchasesType[];
};

const initialState: InitialStateType = {
  userLiked: [],
  userCart: [],
  userPurchases: [],
};

const bookSlice = createSlice({
  name: 'userStaff',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedBooks.fulfilled, (state, action) => {
      state.userLiked = action.payload;
    });
    // builder.addCase(addToLiked.fulfilled, (state, action)=>{
    //     if (action.payload.id===0){
    //         removedIndex = state.userLiked.findIndex((liked)=>{lkied})
    //     }
    // })
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.userCart = action.payload;
    });
    builder.addCase(updateUserCart.fulfilled, (state, action) => {});
  },
});
