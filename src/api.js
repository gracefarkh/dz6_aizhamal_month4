import axios from 'axios'


const API = axios.create ({
    baseURL:`https://jsonplaceholder.typicode.com/posts/`
});

export  default API