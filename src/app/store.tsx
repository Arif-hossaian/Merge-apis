import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import postsReducer from '../features/postsSlice';
import { DataProviderProps } from '../types/types';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
