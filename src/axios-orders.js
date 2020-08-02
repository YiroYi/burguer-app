import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c31da.firebaseio.com/'
});

export default instance;
