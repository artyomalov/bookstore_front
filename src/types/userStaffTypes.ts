import { AuthorType } from './bookTypes';

export type UserLikedType = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  authors: AuthorType[];
  hardcoverPrice: number;
  paperbackPrice: number;
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
};

export type UpdateUSerCartDataType = {
  id: number;
  bookSlug?: string;
  coverType?: string;
  price?: number;
  cartItemId?: number;
};

export type getUserPurchasesType = CartItemType & { boughtTime: string };
