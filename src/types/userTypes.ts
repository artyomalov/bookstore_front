export type UserType = {
  id: number;
  fullName: string;
  avatar: string;
  password: string;
};

export type CreateUserType = {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
};

export type UpdateUseDataType = {
  id: number;
  fullName: string;
  avatar: string;
};

export type UpdateDeleteUserPasswordType = {
  id: number;
  password: string;
};
