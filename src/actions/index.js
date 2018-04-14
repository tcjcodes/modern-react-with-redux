import axios from 'axios';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = '?key=casteezy';

export const CREATE_POST = 'CREATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
};

export const createPost = (values, onSuccess) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => onSuccess());

  return {
    type: CREATE_POST,
    payload: request,
  };
};