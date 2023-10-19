import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1/user/';

const options = {
  baseURL: baseURL,
  timeout: 300000,
};

const axiosInstanceUser = axios.create(options);

axiosInstanceUser.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access');
  if (accessToken) {
    config.headers.Authorization = 'Bearer ' + accessToken;
  }
  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const { response, config } = error;
//     console.log('>>>>>>>>>>>>>>>>>>>')
//     if (response.status !== 401) {
//       return Promise.reject(error);
//     }
//     try {
//       localStorage.removeItem('access')
//       const refresh = localStorage.getItem('refresh');
//       if (refresh !== null) {
//         await axios.post('http://localhost:8000/api/v1/token/refresh/', {
//           refresh: refresh,
//         });
//         localStorage.setItem('access', response.headers.Token);
//         return await axiosInstance(config);
//       }
//     } catch {
//       Promise.reject(error);
//     }
//   }
// );

export default axiosInstanceUser;
