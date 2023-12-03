import axiosInstanceBook from './httpCommonBook';
import { CommentType, RatingType } from '../../types/bookTypes';
import { GetBooksParamsType } from '../../types/bookTypes';
import slugify from '../../services/slugify';
import paramsSerializer from '../../services/paramsSerializer';
import { GetBooksResponseType } from '../../types/bookTypes';

const getBooks = (filtersData: GetBooksParamsType, page: number) => {
  
  const params = paramsSerializer({ ...filtersData, page });

  return axiosInstanceBook.get<GetBooksResponseType>(`/list?${params}`);
};

const getSimularBooks = (slug: string) => {
  return axiosInstanceBook.get<GetBooksResponseType>(`simular/${slug}`);
};

const searchBooks = (title: string, page: number) => {
  const slug = slugify(title);
  return axiosInstanceBook.get<GetBooksResponseType>(
    `/search/${slug}?page=${page}`
  );
};

const addComment = (commentText: string, userId: number, bookId: number) => {
  return axiosInstanceBook.post<CommentType>('comments/create', {
    commentText,
    userId,
    bookId,
  });
};
const getComments = (slug: string) => {
  return axiosInstanceBook.get<CommentType[]>(`/comments_list/${slug}`);
};

const getTotalRate = (bookId: number) => {
  return axiosInstanceBook.get<{ averageRating: number }>(
    `/rating/get_average/${bookId}`
  );
};

const addRate = (rate: number, userId: number, bookId: number) => {
  return axiosInstanceBook.post<RatingType>('/rating/rate', {
    rate,
    userId,
    bookId,
  });
};

const bookRequersts = {
  getBooks,
  getSimularBooks,
  searchBooks,
  addComment,
  getComments,
  getTotalRate,
  addRate,
};

export default bookRequersts;
