import axios from 'axios';
import {store} from './states/store';
import { apiUrl } from './config';

const http = () => {
  // const token = useSelector((state) => state.AuthReducers.authToken);

  let token = store.getState().user?.authToken?.token;
  console.log('hhtp>>>')
  // let token = null;
  let verifyToken = null;
  axios.defaults.headers.common['accept'] = `application/json`;
  axios.defaults.headers.common['content-type'] = `application/json`;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else{
    axios.defaults.headers.common['Authorization'] = `Bearer 32|ZNbYuyp2c7NKlAdrmxqyN5hD5n8kes9c8VIAfUOq`;
  }

  // console.log(`Bearer ${apiUrl}`)

  return axios.create({
    baseURL: apiUrl,
  });
};

export default http;
