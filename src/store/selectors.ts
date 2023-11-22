import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';
import { CartItemType } from '../types/userStaffTypes';

export const selectUserData = (state: RootState) => state.user.user;
export const selectUserEmail = (state: RootState) => state.user.user.email;

export const bookList = (state: RootState) => state.book.books;

export const selectLikedList = (state: RootState) => {
  return state.userStaff.userLiked.likedList;
};

export const selectIsLikedItemsExist = createSelector(
  selectLikedList,
  (likedBooks) => (likedBooks.length > 0 ? true : false)
);

export const selectUserCartItemsList = (state: RootState) =>
  state.userStaff.userCart.cartItemsList;

export const userCartTotalCount = (state: RootState) =>
  state.userStaff.userCart.cartItemsTotalSum;

export const selectIsCartItemsExist = createSelector(
  selectUserCartItemsList,
  (cartItems) => (cartItems.length > 0 ? true : false)
);

export const selectBooks = (state: RootState) => state.book.books;
