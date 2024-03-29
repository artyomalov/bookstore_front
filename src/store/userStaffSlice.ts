import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userStaffRequests from '../api/userStaffAPI/userStaffRequests';
import { AxiosError } from 'axios';
import {
  UserLikedType,
  CartItemType,
  CartType,
  updateCartType,
  UserLikedListType,
  PurchaseItemType,
} from '../types/userStaffTypes';
import { AppDispatch, RootState } from '.';
import { showNotification } from './notificationSlice';
import { notificationType } from '../types/notificationTypes';

export const getLikedBooks = createAsyncThunk<
  UserLikedListType,
  undefined,
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>('userStaff/getLiked', async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const userId = getState().user.user.userLikedId;
    const response = await userStaffRequests.getUserLikedBooks(userId);

    if (response.statusText !== 'OK') {
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Internal server error. Please reload the page.',
          type: notificationType.Error,
        })
      );
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

export const addToLiked = createAsyncThunk<
  UserLikedType,
  { bookSlug: string; inList: boolean },
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>(
  'userStaff/addToLiked',
  async (params, { rejectWithValue, getState, dispatch }) => {
    try {
      const userLikedId = getState().user.user.userLikedId;
      const response = await userStaffRequests.addToLiked(
        userLikedId,
        params.bookSlug,
        params.inList
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

      return rejectWithValue(error());
    }
  }
);

export const getUserCart = createAsyncThunk<
  CartType,
  undefined,
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>('userStaff/getCart', async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const userId = getState().user.user.userCartId;
    const response = await userStaffRequests.getUserCart(userId);
    return {
      id: response.data.id,
      cartItemsList: response.data.cartItemsList,
      total: response.data.total,
    };
  } catch (error: any) {
    dispatch(
      showNotification({
        isVisible: true,
        text: 'Internal server error. Please reload the page.',
        type: notificationType.Error,
      })
    );
    return rejectWithValue(error());
  }
});

export const updateUserCart = createAsyncThunk<
  updateCartType,
  {
    bookSlug?: string;
    coverType?: string;
    price?: number;
    cartItemId?: number;
  },
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>(
  'userStaff/updateCart',
  async (
    { bookSlug, coverType, price, cartItemId },
    { rejectWithValue, getState, dispatch }
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
        dispatch(
          showNotification({
            isVisible: true,
            text: 'Book has been added to the cart.',
            type: notificationType.Sucsess,
          })
        );
        return response.data;
      }
      const response = await userStaffRequests.updateUserCart({
        id: cartId,
        cartItemId: cartItemId,
      });
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Book has been deleted from your cart',
          type: notificationType.Warn,
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
      return rejectWithValue(error());
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk<
  updateCartType,
  {
    id: number;
    increase: boolean;
  },
  { rejectValue: Error | AxiosError; dispatch: AppDispatch }
>(
  'userStaff/updateCartItemQuantity',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await userStaffRequests.updateCartItemQuantity(
        params.id,
        params.increase
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
      return rejectWithValue(error());
    }
  }
);

export const getUserPurchases = createAsyncThunk<
  PurchaseItemType[],
  undefined,
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>('userStaff/purchases', async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const purchasesId = getState().user.user.userPurchasesId;
    const response = await userStaffRequests.getUserPurchases(purchasesId);
    return response.data.purchases;
  } catch (error: any) {
    dispatch(
      showNotification({
        isVisible: true,
        text: 'Internal server error. Please reload the page.',
        type: notificationType.Error,
      })
    );
    return rejectWithValue(error());
  }
});

export const purchaseBooks = createAsyncThunk<
  PurchaseItemType,
  undefined,
  { rejectValue: Error | AxiosError; state: RootState; dispatch: AppDispatch }
>('userStaff/buyBooks', async (_, { rejectWithValue, getState, dispatch }) => {
  try {
    const cartItems = getState().userStaff.userCart.cartItemsList;
    const cartItemsIds = cartItems.map((cartItem: CartItemType) => cartItem.id);
    const purchasesId = getState().user.user.userPurchasesId;
    const response = await userStaffRequests.purchaseBooks(
      purchasesId,
      cartItemsIds
    );
    dispatch(
      showNotification({
        isVisible: true,
        text: 'Thank you fore your purchase. We will coonect with you soon.',
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
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  userLiked: UserLikedListType;
  userCart: {
    cartItemsList: CartItemType[];
    cartItemsTotalSum: number;
  };
  userPurchases: PurchaseItemType[];
};

const initialState: InitialStateType = {
  userLiked: {
    userLikedListId: 0,
    likedList: [],
  },
  userCart: {
    cartItemsList: [],
    cartItemsTotalSum: 0,
  },
  userPurchases: [],
};

const userStaffSlice = createSlice({
  name: 'userStaff',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedBooks.fulfilled, (state, action) => {
      state.userLiked.likedList = action.payload.likedList;
      state.userLiked.userLikedListId = action.payload.userLikedListId;
    });
    builder.addCase(addToLiked.fulfilled, (state, action) => {
      if (action.payload.id === 0 && action.payload.title === 'deleted') {
        const isDeletedElementIndex = state.userLiked.likedList.findIndex(
          (liked) => liked.slug === action.payload.slug
        );
        state.userLiked.likedList.splice(isDeletedElementIndex, 1);
      } else state.userLiked.likedList.push(action.payload);
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.userCart.cartItemsList = action.payload.cartItemsList;
      state.userCart.cartItemsTotalSum = action.payload.total;
    });
    builder.addCase(updateUserCart.fulfilled, (state, action) => {
      if (
        action.payload.cartItem.title === 'deleted' &&
        action.payload.cartItem.coverImage === 'deleted' &&
        action.payload.cartItem.price === 0
      ) {
        const isDeletedElementIndex = state.userCart.cartItemsList.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItem.id
        );
        state.userCart.cartItemsList.splice(isDeletedElementIndex, 1);
      } else state.userCart.cartItemsList.push(action.payload.cartItem);
      state.userCart.cartItemsTotalSum = action.payload.total;
    });

    builder.addCase(updateCartItemQuantity.fulfilled, (state, action) => {
      const updatedCartItem = state.userCart.cartItemsList.find(
        (cartItem) => cartItem.id === action.payload.cartItem.id
      );
      if (updatedCartItem)
        updatedCartItem.quantity = action.payload.cartItem.quantity;
      state.userCart.cartItemsTotalSum = action.payload.total;
    });
    builder.addCase(purchaseBooks.fulfilled, (state, action) => {
      state.userCart.cartItemsList = [];
      state.userCart.cartItemsTotalSum = 0;
    });
  },
});

export default userStaffSlice.reducer;
