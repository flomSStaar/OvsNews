import axios from 'axios';
import {Config} from '@src/config/config';

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
