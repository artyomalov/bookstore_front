import { BookType } from './bookTypes';

export type CartItemType = {
  book: BookType;
  quantity: string;
};

export type UserType = {
  email: string;
  fullName: string;
  avatar: string;
  userCart: CartItemType[];
  likedByUser: BookType[];
  listOfUsersPurchases: BookType[];
};

export type CreateUserType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUserDataType = {
  email: string;
  fullName: string;
  avatar: any;
  oldPassword: string;
  newPassword: string;
};
export type UpdateUserAvatarType = {
  avatar: ImageBitmap;
};

export type UpdateDeleteUserPasswordType = {
  email: string;
  password: string;
};