import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import authorReducer from '../features/author/authorSlice';
import postsReducer from '../features/posts/postsSlice';
import selectedPostReducer from '../features/selectedPost/selectedPostSlice';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    author: authorReducer,
    posts: postsReducer,
    selectedPost: selectedPostReducer,
    comments: commentsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// eslint-disable-next-line @typescript-eslint/indent, max-len, prettier/prettier
export type AppThunk<ReturnType = void> = ThunkAction< ReturnType, RootState, unknown,Action<string>>;
