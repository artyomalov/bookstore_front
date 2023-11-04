import { BookType } from '../../types/bookTypes';
import axiosInstanceBook from './httpCommonBook';

const getBooks = () => {
  return axiosInstanceBook.get<BookType[]>('/book_list/');
};

const bookRequersts = {
  getBooks,
};

export default bookRequersts;
