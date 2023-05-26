import baseUrl from './httpCommonUser';
import { AxiosRequestConfig } from 'axios';
import {UserType, CreateUserType} from '../../types/userTypes';

const userPrefix = 'user'
const createUser = (createUserData: CreateUserType) => {
  const requestConfig: AxiosRequestConfig = {};
  return baseUrl.post<UserType>(`${userPrefix}`, {
    email: createUserData.email,
    password: createUserData.password,
    confirm_password: createUserData.confirmPassword,
    full_name: createUserData.fullName
  });
}

// const signInUser = ()

const getUser = (id: number) => {
  return baseUrl.get<UserType>(`/${id}`);
};

const updateUserData = (
  id: number,
  full_name: string,
  avatar: string,
) => {
  return baseUrl.patch<UserType>(`${userPrefix}/${id}`, {
    full_name,
    avatar,
  });
};

const updateUserPassword = (id: number, password: string) => {
  return baseUrl.patch<UserType>(`${userPrefix}/${id}`, { password });
};

// const deleteUser = (id: number, password: string) => {
//   const requestConfig: AxiosRequestConfig = {};
//   return userOperations.delete<number>(`/${id}`, {password});
// };
// при удалении нужно указать объект в который поместить объект с полем которое я хочу передать т.е. объект в объекте.

const userRequests = {
  getUser,
  updateUserData,
  updateUserPassword,
};

export default userRequests;
