import axios from 'axios';
import {getToken} from './localstorage';

const BASE_URL = process.env.PROD_URL;

console.log('prod url', BASE_URL);

export const APIClient = axios.create({
  baseURL: `${BASE_URL}/api/v1/auth/user`,
  headers: {'Content-Type': 'application/json', 'Accept-Encoding': 'gzip'},
});

// FOR AUTHENTICATED ROUTES
// TOKEN TO BE EXTRACTED FROM STORE
const AuthAPIClient = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  },
});

AuthAPIClient.interceptors.request.use(
  async config => {
    const storedToken = await getToken();
    const token = JSON.parse(storedToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // console.log(token);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const AuthAPIClient2 = axios.create({
  baseURL: `${BASE_URL}/api/v1/auth/user`,
  baseURL: `${BASE_URL}/api/v1/auth/user`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  },
});

AuthAPIClient2.interceptors.request.use(
  async config => {
    const storedToken = await getToken();
    const token = JSON.parse(storedToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {AuthAPIClient, AuthAPIClient2};
