import axiosInstanceUserStaff from './httpCommonUserStaff';
import {
  CartItemType,
  UpdateUSerCartDataType,
  UserLikedType,
  getUserPurchasesType,
} from '../../types/userStaffTypes';

const getUserLikedBooks = (id: number) => {
  return axiosInstanceUserStaff.get<{ userLiked: UserLikedType[] }>(
    `/liked/${id}`
  );
};

const addToLiked = (id: number, bookSlug: string, inList: boolean) => {
  return axiosInstanceUserStaff.put<UserLikedType>(`/liked/${id}`, {
    bookSlug: bookSlug,
    inList: inList,
  });
};

const getUserCart = (id: number) => {
  return axiosInstanceUserStaff.get<{userCart: CartItemType[]}>(`/cart/${id}`);
};

const updateUserCart = (updateCartData: UpdateUSerCartDataType) => {
  if (
    updateCartData.bookSlug &&
    updateCartData.coverType &&
    updateCartData.price
  ) {
    return axiosInstanceUserStaff.put<CartItemType>(
      `/cart/${updateCartData.id}`,
      {
        bookSlug: updateCartData.bookSlug,
        coverType: updateCartData.coverType,
      }
    );
  }
  return axiosInstanceUserStaff.put<CartItemType>(
    `/cart/${updateCartData.id}`,
    {
      cartItemId: updateCartData.cartItemId,
    }
  );
};

const updateCartItemQuantity = (id: number, increase: boolean) => {
  return axiosInstanceUserStaff.put<CartItemType>(`/cart_item/${id}`, {
    increase: increase,
  });
};

const getUserPurchases = (id: number) => {
  return axiosInstanceUserStaff.get<getUserPurchasesType[]>(`/cart_item/${id}`);
};

const userStaffRequests = {
  getUserLikedBooks,
  addToLiked,
  getUserCart,
  updateUserCart,
  updateCartItemQuantity,
  getUserPurchases,
};
export default userStaffRequests;
