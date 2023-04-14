import axios from 'axios';
import {API_BASE_URL} from 'env';
import { buildHeaders } from './UsersService';

export const insertData = (args) => {
    return axios.post(`${API_BASE_URL}/revalida/users/insert`, args, {headers: buildHeaders()});
}