import axiosInstanceGenres from './httpCommonFilters';
import { GenreType } from '../../types/bookTypes';

const getGengres = () => {
  return axiosInstanceGenres.get<GenreType[]>('');
};

const filtersRequests = {
  getGengres,
};

export default filtersRequests;
