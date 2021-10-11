import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const key = '92574682aabe917cfe7f9b30b27a0313';

export default api;