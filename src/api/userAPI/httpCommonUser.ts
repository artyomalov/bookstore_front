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

axiosInstanceUser.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response, config } = error;
    try {
      const refreshToken: string | null = localStorage.getItem('refresh');
      if (refreshToken !== null) {
        if (response.status === 401) {
          {
            const res = await axios.post(
              'http://localhost:8000/api/v1/user/token/refresh/',
              {
                refresh: refreshToken,
              }
            );
            localStorage.setItem('access', res.data.access);
          }
          return await axiosInstanceUser(config);
        }
      }
    } catch (error) {
      
      return Promise.reject(error);
    }
  }
);

// axiosInstanceUser.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const { response, config } = error;
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
//         return await axiosInstanceUser(config);
//       }
//     } catch {
//       Promise.reject(error);
//     }
//   }
// );

export default axiosInstanceUser;
