import { Url } from 'url';
import axiosInstanceBook from './httpCommonFilters';
import { GenreType } from '../../types/filtersTypes';

const getGengres = () => {
  return axiosInstanceBook.get<GenreType[]>('/genres/');
};

const filtersRequests = {
  getGengres,
};

export default filtersRequests;
