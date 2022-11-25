import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../api/fetchData';
import { initialStateProps } from '../types/types';

const initialState: initialStateProps = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error;
      });
  },
});
export const selectAllPosts = (state: { posts: { posts: any } }) =>
  state.posts.posts;
export const getAllPostsStatus = (state: { posts: { status: any } }) =>
  state.posts.status;
export const getAllPostsError = (state: { posts: { error: any } }) =>
  state.posts.error;

export default postsSlice.reducer;
