import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../api/fetchData';
import AllPosts from '../components/AllPosts';
import {
  getAllPostsError,
  getAllPostsStatus,
  selectAllPosts,
} from '../features/postsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  console.log(posts);
  const postsStatus = useSelector(getAllPostsStatus);
  const postsError = useSelector(getAllPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts() as any);
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'success') {
    content = posts
      .slice(0, 8)
      .map((post: any) => <AllPosts key={post.id} post={post} />);
  } else if (postsStatus === 'fail') {
    content = <p>{postsError}</p>;
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Posts</h2>
      {content}
    </div>
  );
};

export default Home;
