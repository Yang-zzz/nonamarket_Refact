import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'multipart/form-data' },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      const modifiedConfig = {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      };
      return modifiedConfig;
    }
    return config;
  },
  (error) => {
    console.log('Request Error:', error.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 서버에서 에러 응답을 받은 경우
      console.log('Response Error:', error.response.data);
    } else if (error.request) {
      // 요청을 보낸 후 응답을 받지 못한 경우
      console.log('No Response:', error.request);
    } else {
      // 요청을 보내기 전에 발생한 에러
      console.log('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default { instance, imgInstance };
