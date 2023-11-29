import { AuthorType } from './bookTypes';

export type UserLikedType = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  authors: AuthorType[];
  hardcoverPrice: number;
};

export type UserLikedListType = {
  userLikedListId: number;
  likedList: UserLikedType[];
};

export type CartItemType = {
  id: number;
  title: string;
  slug: string;
  coverType: string;
  coverImage: string;
  authors: AuthorType[];
  price: number;
  quantity: number;
  total: number;
};

export type updateCartType = {
  cartItem: CartItemType;
  total: number;
};

export type CartType = {
  id: number;
  cartItemsList: CartItemType[];
  total: number;
};

export type PurchaseItemType = {
  id: number;
  quantity: number;
  title: string;
  slug: string;
  coverType: string;
  coverImage: string;
  price: number;
  authors: AuthorType[];
  boughtTime: string;
};

export type UserPurchasesType = {
  id: number;
  purchases: PurchaseItemType[];
};
