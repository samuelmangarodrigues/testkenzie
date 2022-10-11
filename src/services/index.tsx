import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test-kenzie.herokuapp.com/api/',
});
