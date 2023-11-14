import axiosInstanceBook from './httpCommonBook';
import { BookType } from '../../types/bookTypes';

const getBooks = () => {
  return axiosInstanceBook.get<BookType[]>('/book_list/');
};

const bookRequersts = {
  getBooks,
};

export default bookRequersts;
