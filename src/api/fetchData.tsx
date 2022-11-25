import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './baseURL';

const fetchAxiosData = (path: string) =>
  axios
    .get(`${BASE_URL}/${path}`)
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response));

export const fetchPosts = createAsyncThunk('/', async () => {
  try {
    const res = await Promise.all([
      fetchAxiosData('users'),
      fetchAxiosData('posts'),
    ]);
    console.log(res);
    const result = res[0].map((user: { id: number }) =>
      res[1].filter((post: { userId: number }) => post.userId === user.id)
    );
    //console.log(result);
    return result;
  } catch (error: any) {
    return error.message;
  }
});
