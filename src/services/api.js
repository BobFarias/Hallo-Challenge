import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://hallotst.api.hallo.app/v1',
});

export default api;
