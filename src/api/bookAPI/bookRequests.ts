import axiosInstanceBook from './httpCommonBook';
import { BookType } from '../../types/bookTypes';
import slugify from '../../services/slugify';

const getBooks = () => {
  return axiosInstanceBook.get<BookType[]>('/book_list/');
};

const searchBooks = (title: string) => {
  const slug = slugify(title);
  return axiosInstanceBook.get<BookType[]>(`/search/${slug}`);
};

const bookRequersts = {
  getBooks,
  searchBooks,
};

export default bookRequersts;
