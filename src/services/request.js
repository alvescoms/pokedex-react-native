import axios from 'axios';

const request = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default request;