import axios from 'axios';
const baseURL = 'http://localhost:8800/api/v1'

const apiFadadlines = axios.create({
  baseURL: baseURL,
});

export {
  apiFadadlines
};