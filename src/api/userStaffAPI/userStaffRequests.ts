import axiosInstanceUserStaff from './httpCommonUserStaff';
import { BookType, BookTypeLiked } from '../../types/bookTypes';

const getUserLikedBooks = (id: number) => {
  return axiosInstanceUserStaff.get<BookType[]>(`/liked/${id}`);
};

const addToLiked = (id: number, bookSlug: string, liked: boolean) => {
  return axiosInstanceUserStaff.put<{ added: boolean }>(`/liked/${id}`, {
    bookSlug: bookSlug,
    liked: liked,
  });
};

const getUserCart = (id: number) => {
  return axiosInstanceUserStaff.get<BookTypeLiked[]>(`/cart/${id}`);
};

type UpdateUSerCartType = {
  operationType: string;
  bookSlug?: string;
  coverType?: string;
  cartItemId?: number;
};

const updateUserCart = (updateCartData: UpdateUSerCartType, id: number) => {
  if (
    updateCartData.operationType === 'add' &&
    updateCartData.bookSlug &&
    updateCartData.coverType
  ) {
    return axiosInstanceUserStaff.put<{ completed: string }>(`/cart/${id}`, {
      operationType: updateCartData.operationType,
      bookSlug: updateCartData.bookSlug,
      coverType: updateCartData.coverType,
    });
  }
  if (updateCartData.operationType === 'remove' && updateCartData.cartItemId) {
    return axiosInstanceUserStaff.put<{ completed: string }>(`/cart/${id}`, {
      operationType: updateCartData.operationType,
      cartItemId: updateCartData.cartItemId,
    });
  }
};

const updateCartItemQuantity = (id: number, operationType: string) => {
  return axiosInstanceUserStaff.put<{ updated: boolean }>(`/cart_item/${id}`, {
    operationType: operationType,
  });
};
