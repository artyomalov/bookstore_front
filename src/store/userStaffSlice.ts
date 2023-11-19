import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userStaffRequests from '../api/userStaffAPI/userStaffRequests';
import { AxiosError } from 'axios';
import {
  UserLikedType,
  CartItemType,
  getUserPurchasesType,
  CartType,
} from '../types/userStaffTypes';
import { RootState } from '.';
import { stat } from 'fs';

export const getLikedBooks = createAsyncThunk<
  UserLikedType[],
  undefined,
  { rejectValue: Error | AxiosError; state: RootState }
>('userStaff/getLiked', async (_, { rejectWithValue, getState }) => {
  try {
    const userId = getState().user.user.userLikedId;
    const response = await userStaffRequests.getUserLikedBooks(userId);

    return response.data.userLiked;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const addToLiked = createAsyncThunk<
  UserLikedType,
  { bookSlug: string; inList: boolean },
  { rejectValue: Error | AxiosError; state: RootState }
>('userStaff/addToLiked', async (params, { rejectWithValue, getState }) => {
  try {
    const userLikedId = getState().user.user.userLikedId;
    const response = await userStaffRequests.addToLiked(
      userLikedId,
      params.bookSlug,
      params.inList
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const getUserCart = createAsyncThunk<
  CartType,
  undefined,
  { rejectValue: Error | AxiosError; state: RootState }
>('userStaff/getCart', async (_, { rejectWithValue, getState }) => {
  try {
    const userId = getState().user.user.userCartId;
    const response = await userStaffRequests.getUserCart(userId);

    return {
      id: response.data.id,
      cartItemsList: response.data.cartItemsList,
      total: response.data.total,
    };
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const updateUserCart = createAsyncThunk<
  CartItemType,
  {
    bookSlug?: string;
    coverType?: string;
    price?: number;
    cartItemId?: number;
  },
  { rejectValue: Error | AxiosError; state: RootState }
>(
  'userStaff/updateCart',
  async (
    { bookSlug, coverType, price, cartItemId },
    { rejectWithValue, getState }
  ) => {
    const cartId = getState().user.user.userCartId;
    try {
      if (bookSlug && coverType && price) {
        const response = await userStaffRequests.updateUserCart({
          id: cartId,
          bookSlug: bookSlug,
          coverType: coverType,
          price: price,
        });
        return response.data;
      }
      const response = await userStaffRequests.updateUserCart({
        id: cartId,
        cartItemId: cartItemId,
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error());
    }
  }
);

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
  undefined,
  { rejectValue: Error | AxiosError; state: RootState }
>('userStaff/purchases', async (_, { rejectWithValue, getState }) => {
  try {
    const userId = getState().user.user.userPurchasesId;
    const response = await userStaffRequests.getUserPurchases(userId);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  userLiked: UserLikedType[];
  userCart: CartItemType[];
  cartTotalCount: number;
  userPurchases: getUserPurchasesType[];
};

const initialState: InitialStateType = {
  userLiked: [],
  userCart: [],
  cartTotalCount: 0,
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
      state.userCart = action.payload.cartItemsList;
      state.cartTotalCount = action.payload.total;
    });
    builder.addCase(updateUserCart.fulfilled, (state, action) => {
      if (
        action.payload.title === 'deleted' &&
        action.payload.coverImage === 'deleted' &&
        action.payload.price === 0
      ) {
        const isDeletedElementIndex = state.userCart.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        state.userCart.splice(isDeletedElementIndex, 1);
      } else state.userCart.push(action.payload);
    });

    builder.addCase(updateCartItemQuantity.fulfilled, (state, action) => {
      const updatedCartItem = state.userCart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (updatedCartItem) updatedCartItem.quantity = action.payload.quantity;
    });
  },
});

export default userStaffSlice.reducer;
