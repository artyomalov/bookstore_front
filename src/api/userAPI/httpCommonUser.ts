import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/';

const options = {
  baseURL: baseURL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('Token');
  if (accessToken) {
    config.headers.Authorization = 'Token ' + accessToken;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    if (response.status !== 401) {
      return Promise.reject(error);
    }
    try {
      await axios.get('/token/refresh/', options);
      localStorage.setItem('accessToken', response.headers.Token);
      return await axiosInstance(config);
    } catch {
      Promise.reject(error);
    }
  }
);

export default axiosInstance;
