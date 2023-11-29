import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';
import { GetBooksParamsType } from '../types/bookTypes';

export const selectUserData = (state: RootState) => state.user.user;
export const selectUserId = (state: RootState) => state.user.user.id;
export const selectIfUserExists = (state: RootState) => {
  const userEmail = state.user.user.email;
  return userEmail === 'not set' ? false : true;
};

export const selectBooks = (state: RootState) => state.book.books;

export const selectBooksList = (state: RootState) => state.book.books;

export const selectFilters = (state: RootState) => {
  const filters: GetBooksParamsType = {
    genre_id: state.filters.selectedGenres,
    min_price: state.filters.priceRange.minPrice,
    max_price: state.filters.priceRange.maxPrice,
    sort_type: state.filters.selectedSortType,
  };
  return filters;
};

export const selectGenres = (state: RootState) => state.filters.genres;

export const selectLikedList = (state: RootState) =>
  state.userStaff.userLiked.likedList;

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


export const selectUserPurchisesList = (state: RootState)=>state.user.user.userPurchasesId