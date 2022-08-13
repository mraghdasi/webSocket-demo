import axios from 'axios';

const basUrl = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: basUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
