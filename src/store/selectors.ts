import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';
import { CartItemType } from '../types/userStaffTypes';

export const selectUserData = (state: RootState) => state.user.user;
export const selectIfUserExists = (state: RootState) => {
  const userEmail = state.user.user.email;
  return userEmail === 'not set' ? false : true;
};

export const selectBooksList = (state: RootState) => state.book.books;

export const selectLikedList = (state: RootState) => {
  return state.userStaff.userLiked.likedList;
};

export const selectIsLikedItemsExist = createSelector(
  selectLikedList,
  (likedBooks) => (likedBooks.length > 0 ? true : false)
);

export const selectUserCartItemsList = (state: RootState) =>
  state.userStaff.userCart.cartItemsList;

export const selectUserCartTotalCount = (state: RootState) =>
  state.userStaff.userCart.cartItemsTotalSum;

export const selectIsCartItemsExist = createSelector(
  selectUserCartItemsList,
  (cartItems) => (cartItems.length > 0 ? true : false)
);

export const selectBooks = (state: RootState) => state.book.books;
