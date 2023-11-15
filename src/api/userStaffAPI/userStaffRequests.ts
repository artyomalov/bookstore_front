import axiosInstanceUserStaff from './httpCommonUserStaff';
import { AuthorType, BookType, BookTypeLiked } from '../../types/bookTypes';
import {
  GetUserCartType,
  UpdateUSerCartType,
  UserLikedType,
  getUserPurchasesType,
} from '../../types/userStaffTypes';

const getUserLikedBooks = (id: number) => {
  return axiosInstanceUserStaff.get<UserLikedType[]>(`/liked/${id}`);
};

const addToLiked = (id: number, bookSlug: string) => {
  return axiosInstanceUserStaff.put<UserLikedType>(`/liked/${id}`, {
    bookSlug: bookSlug,
  });
};

const getUserCart = (id: number) => {
  return axiosInstanceUserStaff.get<GetUserCartType[]>(`/cart/${id}`);
};

const updateUserCart = (updateCartData: UpdateUSerCartType) => {
  if (
    updateCartData.operationType === 'add' &&
    updateCartData.bookSlug &&
    updateCartData.coverType &&
    updateCartData.price
  ) {
    return axiosInstanceUserStaff.put<{ completed: string }>(
      `/cart/${updateCartData.id}`,
      {
        operationType: updateCartData.operationType,
        bookSlug: updateCartData.bookSlug,
        coverType: updateCartData.coverType,
      }
    );
  }
  if (updateCartData.operationType === 'remove' && updateCartData.cartItemId) {
    return axiosInstanceUserStaff.put<{ completed: string }>(
      `/cart/${updateCartData.id}`,
      {
        operationType: updateCartData.operationType,
        cartItemId: updateCartData.cartItemId,
      }
    );
  }
};

const updateCartItemQuantity = (id: number, operationType: string) => {
  return axiosInstanceUserStaff.put<{ updated: boolean }>(`/cart_item/${id}`, {
    operationType: operationType,
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
