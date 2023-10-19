import axiosInstanceUser from './httpCommonUser';
import {
  UserType,
  CreateUserType,
  UpdateUserDataType,
} from '../../types/userTypes';

type SigninResponseType = {
  token_data: {
    access: string;
    refresh: string;
  };
  user_data: UserType;
};

const createUser = (createUserData: CreateUserType) => {
  return axiosInstanceUser.post<{ response: string }>('/signup/', {
    email: createUserData.email,
    password: createUserData.password,
    confirm_password: createUserData.confirmPassword,
  });
};

const signInUser = (email: string, password: string) => {
  return axiosInstanceUser.post<SigninResponseType>(`/signin/`, {
    email,
    password,
  });
};

const profilePath = '/profile/';

const getUser = () => {
  return axiosInstanceUser.get<UserType>(profilePath);
};

const updateUserData = (updatedUserData: UpdateUserDataType) => {
  const data = new FormData();
  data.append('email', updatedUserData.email);
  data.append('full_name', updatedUserData.fullName);
  data.append('avatar', updatedUserData.avatar);
  data.append('old_password', updatedUserData.oldPassword);
  data.append('new_password', updatedUserData.newPassword);
  console.log(data)
  return axiosInstanceUser.put<UserType>(profilePath, data);
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
  return axiosInstanceUser.put<UserType>(profilePath, passwordData);
};


const userRequests = {
  createUser,
  signInUser,
  getUser,
  updateUserData,
  updateUserPassword,
};

export default userRequests;
