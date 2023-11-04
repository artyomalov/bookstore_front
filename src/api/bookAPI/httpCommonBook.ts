import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/book/';
const axiosInstanceBook = axios.create({ baseURL: baseURL });

export default axiosInstanceBook
