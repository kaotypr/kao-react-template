/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_URL } from 'config';
import localStorage from 'helper/localStorage';

export const tokenizedUrl = url => `${API_URL}/api/portal${url}?jwt=${localStorage.getToken()}`;

const instances = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onFulFilledRequest = conf => {
  const authToken = localStorage.getToken();
  if (authToken) {
    conf.headers.Authorization = `Bearer ${authToken}`;
  }
  return conf;
};

const onRejectedRequest = err => Promise.reject(err);

const onFulFilledResponse = res => {
  if (res.headers['content-type'] !== 'application/json') return res;
  return JSON.parse(res.body);
};

const onRejectedResponse = err => Promise.reject(err);

instances.interceptors.request.use(onFulFilledRequest, onRejectedRequest);
instances.interceptors.response.use(onFulFilledResponse, onRejectedResponse);

export default instances;
