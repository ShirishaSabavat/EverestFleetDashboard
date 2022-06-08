import axios from 'axios';
import Cookies from 'js-cookie';

const client = axios.create({
  baseURL: process.env.REACT_APP_FLEET_SERVER_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Token ${Cookies.get('token') || ''}`,
  },
});

client.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    const auth = token ? `Token ${token}` : '';
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
