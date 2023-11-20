import { RootState } from '.';

export const selectUserData = (state: RootState) => state.user.user;

export const bookList = (state: RootState) => state.book.books;

export const userCartItemsList = (state: RootState) =>
  state.userStaff.userCart.cartItemsList;

export const userCartTotalCount = (state: RootState) =>
  state.userStaff.userCart.cartItemsTotalSum;

export const selectBooks = (state:RootState) => state.book.books