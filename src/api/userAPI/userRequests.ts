import axiosInstanceUser from './httpCommonUser';
import {
  UserType,
  CreateUserType,
  UpdateUserDataType,
} from '../../types/userTypes';
import { AxiosError } from 'axios';

type SigninResponseType = {
  token_data: {
    access: string;
    refresh: string;
  };
  user_data: UserType;
  error?: string;
};

const createUser = (createUserData: CreateUserType) => {
  return axiosInstanceUser.post<{ response: string }>('/signup/', {
    email: createUserData.email,
    password: createUserData.password,
    confirm_password: createUserData.confirmPassword,
  });
};

const signInUser = (email: string, password: string) => {
  return axiosInstanceUser.post<any>(`/signin/`, {
    email,
    password,
  });
};

const getUser = () => {
  return axiosInstanceUser.get<UserType>('/profile/');
};

const updateUserData = (updatedUserData: UpdateUserDataType) => {
  const data = new FormData();
  data.append('email', updatedUserData.email);
  data.append('fullName', updatedUserData.fullName);
  data.append('avatar', updatedUserData.avatar);
  data.append('oldPassword', updatedUserData.oldPassword);
  data.append('newPassword', updatedUserData.newPassword);

  return axiosInstanceUser.put<UserType>('/profile/', data);
};

type UpdatePasswordType = {
  oldPassword: string;
  newPassword: string;
};

const updateUserPassword = (updatePassword: UpdatePasswordType) => {
  const passwordData = {
    old_password: updatePassword.oldPassword,
    new_password: updatePassword.newPassword,
  };
  return axiosInstanceUser.put<UserType>('/profile/', passwordData);
};

const userRequests = {
  createUser,
  signInUser,
  getUser,
  updateUserData,
  updateUserPassword,
};

export default userRequests;
