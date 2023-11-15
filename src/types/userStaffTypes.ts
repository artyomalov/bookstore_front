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


export type GetUserCartType = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  authors: AuthorType[];
  quantity: number;
  price: number;
};

export type UpdateUSerCartType = {
  id: number;
  operationType: string;
  bookSlug?: string;
  coverType?: string;
  cartItemId?: number;
  price?: number;
};

export type getUserPurchasesType = GetUserCartType & { boughtTime: string };
