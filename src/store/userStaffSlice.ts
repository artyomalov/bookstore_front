import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import userStaffRequests from '../api/userStaffAPI/userStaffRequests';
import { AxiosError } from 'axios';
import {
  UserLikedType,
  CartItemType,
  UpdateUSerCartDataType,
  getUserPurchasesType,
} from '../types/userStaffTypes';

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
  { id: number; bookSlug: string; inList: boolean },
  { rejectValue: Error | AxiosError }
>('userStaff/addToLiked', async (params, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.addToLiked(
      params.id,
      params.bookSlug,
      params.inList
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const getUserCart = createAsyncThunk<
  CartItemType[],
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

export const updateUserCart = createAsyncThunk<
  CartItemType,
  UpdateUSerCartDataType,
  { rejectValue: Error | AxiosError }
>('userStaff/updateCart', async (updateCartData, { rejectWithValue }) => {
  try {
    if (
      updateCartData.bookSlug &&
      updateCartData.coverType &&
      updateCartData.price
    ) {
      const response = await userStaffRequests.updateUserCart({
        id: updateCartData.id,
        bookSlug: updateCartData.bookSlug,
        coverType: updateCartData.coverType,
        price: updateCartData.price,
      });
      return response.data;
    }
    const response = await userStaffRequests.updateUserCart({
      id: updateCartData.id,
      cartItemId: updateCartData.cartItemId,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const updateCartItemQuantity = createAsyncThunk<
  CartItemType,
  {
    id: number;
    increase: boolean;
  },
  { rejectValue: Error | AxiosError }
>('userStaff/updateCartItemQuantity', async (params, { rejectWithValue }) => {
  try {
    const response = await userStaffRequests.updateCartItemQuantity(
      params.id,
      params.increase
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
  userCart: CartItemType[];
  userPurchases: getUserPurchasesType[];
};

const initialState: InitialStateType = {
  userLiked: [],
  userCart: [],
  userPurchases: [],
};

const userStaffSlice = createSlice({
  name: 'userStaff',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedBooks.fulfilled, (state, action) => {
      state.userLiked = action.payload;
    });
    builder.addCase(addToLiked.fulfilled, (state, action) => {
      if (action.payload.id === 0 && action.payload.title === 'deleted') {
        const isDeletedElementIndex = state.userLiked.findIndex(
          (liked) => liked.slug === action.payload.slug
        );
        state.userLiked.splice(isDeletedElementIndex, 1);
      } else state.userLiked.push(action.payload);
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.userCart = action.payload;
    });
    builder.addCase(updateUserCart.fulfilled, (state, action) => {
      const updatedCartItem = state.userCart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (updatedCartItem) updatedCartItem.quantity = action.payload.quantity;
    });
  },
});

export default userStaffSlice.reducer;
