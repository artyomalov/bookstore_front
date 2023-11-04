import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import genresReducer from './genresSlice';
import bookReducer from './bookSlice';

const rootReducer = combineReducers({
  user: userReducer,
  genres: genresReducer,
  book: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
