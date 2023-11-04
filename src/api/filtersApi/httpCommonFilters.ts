import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/book/genres/';
const axiosInstanceGenres = axios.create({ baseURL: baseURL });

export default axiosInstanceGenres