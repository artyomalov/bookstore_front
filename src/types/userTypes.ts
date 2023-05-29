export type AuthorType = {
  firstName: string;
  lastName: string;
  biography: string;
}

export type BookType = {
  title: string;
  annotation: string;
  inStockQuantity: number;
  genre: string;
  price: number;
  coverImage: string;
  authors: AuthorType[];
}


export type UserType = {
  id: number;
  fullName: string;
  avatar: string;
  userCart: BookType[];
  likedByUser: BookType[];
  listOfUsersPurchases: BookType[];
};

export type CreateUserType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UpdateUserDataType = {
  id: number;
  fullName: string;
  avatar: string;
};

export type UpdateDeleteUserPasswordType = {
  id: number;
  password: string;
};
