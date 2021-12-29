import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-app-bynt.herokuapp.com/'
})

export default instance