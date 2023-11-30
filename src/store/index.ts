import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import filtersReducer from './filtersSlice';
import bookReducer from './bookSlice';
import userStaffReducer from './userStaffSlice';
import notificationReducer from './notificationSlice';

const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
  book: bookReducer,
  userStaff: userStaffReducer,
  notifications: notificationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
