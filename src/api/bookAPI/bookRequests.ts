import axiosInstanceBook from './httpCommonBook';
import { AuthorType, BookType, CommentType } from '../../types/bookTypes';
import slugify from '../../services/slugify';

const getBooks = () => {
  return axiosInstanceBook.get<BookType[]>('/book_list/');
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
  return axiosInstanceBook.get<CommentType[]>(`/comments/${slug}`);
};

const bookRequersts = {
  getBooks,
  searchBooks,
  addComment,
  getComments,
};

export default bookRequersts;
