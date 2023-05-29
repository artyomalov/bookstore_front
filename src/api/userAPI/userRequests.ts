import baseUrl from './httpCommonUser';
import { UserType, CreateUserType } from '../../types/userTypes';

const userPrefix = 'user';

const createUser = (createUserData: CreateUserType) => {
  return baseUrl.post<{email: string}>(`${userPrefix}`, {
    email: createUserData.email,
    password: createUserData.password,
    confirm_password: createUserData.confirmPassword,
  });
};

const signInUser = (email: string, password: string) => {
  return baseUrl.post<UserType>(`signup`, {
    email,
    password,
  });
};

const getUser = (id: string) => {
  return baseUrl.get<UserType>(`/${id}`);
};

const updateUserData = (id: number, full_name: string | undefined = undefined, avatar: string | undefined = undefined) => {
  return baseUrl.patch<UserType>(`${userPrefix}/${id}`, {
    full_name,
    avatar,
  });
};

const updateUserPassword = (id: number, password: string) => {
  return baseUrl.patch<UserType>(`${userPrefix}/${id}`, { password });
};

const userRequests = {
  createUser,
  signInUser,
  getUser,
  updateUserData,
  updateUserPassword,
};

export default userRequests;
