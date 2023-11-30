import axiosInstanceUserStaff from './httpCommonUserStaff';
import {
  CartType,
  UserPurchasesType,
  UserLikedListType,
  UserLikedType,
  updateCartType,
  PurchaseItemType,
} from '../../types/userStaffTypes';

const getUserLikedBooks = (id: number) => {
  return axiosInstanceUserStaff.get<UserLikedListType>(`/liked/${id}`);
};

const addToLiked = (id: number, bookSlug: string, inList: boolean) => {
  return axiosInstanceUserStaff.put<UserLikedType>(`/liked/${id}`, {
    bookSlug: bookSlug,
    inList: inList,
  });
};

const getUserCart = (id: number) => {
  return axiosInstanceUserStaff.get<CartType>(`/cart/${id}`);
};

const updateUserCart = (updateCartData: {
  id: number;
  bookSlug?: string;
  coverType?: string;
  price?: number;
  cartItemId?: number;
}) => {
  if (
    updateCartData.bookSlug &&
    updateCartData.coverType &&
    updateCartData.price
  ) {
    return axiosInstanceUserStaff.put<updateCartType>(
      `/cart/${updateCartData.id}`,
      {
        bookSlug: updateCartData.bookSlug,
        coverType: updateCartData.coverType,
        price: updateCartData.price,
      }
    );
  }
  return axiosInstanceUserStaff.put<updateCartType>(
    `/cart/${updateCartData.id}`,
    {
      cartItemId: updateCartData.cartItemId,
    }
  );
};

const updateCartItemQuantity = (id: number, increase: boolean) => {
  return axiosInstanceUserStaff.put<updateCartType>(`/cart_item/${id}`, {
    increase: increase,
  });
};

const getUserPurchases = (id: number) => {
  return axiosInstanceUserStaff.get<UserPurchasesType>(`/purchases/${id}`);
};

const purchaseBooks = (id: number, cartItemsIds: number[]) => {
  return axiosInstanceUserStaff.put<PurchaseItemType>(`/purchases/${id}`, [
    cartItemsIds,
  ]);
};

const userStaffRequests = {
  getUserLikedBooks,
  addToLiked,
  getUserCart,
  updateUserCart,
  updateCartItemQuantity,
  getUserPurchases,
  purchaseBooks,
};
export default userStaffRequests;
