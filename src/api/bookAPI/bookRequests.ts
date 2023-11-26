import axiosInstanceBook from './httpCommonBook';
import {
  BookType,
  CommentType,
  RatingType,
} from '../../types/bookTypes';
import slugify from '../../services/slugify';

const getBooks = () => {
  return axiosInstanceBook.get<BookType[]>('/list/');
};

const getSimularBooks = (slug: string) => {
  return axiosInstanceBook.get<BookType[]>(`simular/${slug}`);
};

const searchBooks = (title: string) => {
  const slug = slugify(title);
  return axiosInstanceBook.get<BookType[]>(`/search/${slug}`);
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

const getTotalRate = (bookId:number) =>{
  return axiosInstanceBook.get<{averageRating:number}>(`/rating/get_average/${bookId}`)
}


const addRate = (rate: number, userId: number, bookId: number) => {
  return axiosInstanceBook.post<RatingType>('/rating/rate/', {
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
