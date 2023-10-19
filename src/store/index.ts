import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import filterReducer from './filtersSlice';
const rootReducer = combineReducers({
  user: userReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
