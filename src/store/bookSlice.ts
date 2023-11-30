import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookRequersts from '../api/bookAPI/bookRequests';
import {
  BookType,
  GetBooksParamsType,
  GetBooksResponseType,
} from '../types/bookTypes';
import { AxiosError } from 'axios';
import { AppDispatch } from '.';
import { showNotification } from './notificationSlice';
import { notificationType } from '../types/notificationTypes';

export const getBooks = createAsyncThunk<
  GetBooksResponseType,
  GetBooksParamsType,
  { rejectValue: Error | AxiosError; dispatch: AppDispatch }
>('books/getBooks', async function (params, { rejectWithValue, dispatch }) {
  try {
    const response = await bookRequersts.getBooks(params, 1);
    return response.data;
  } catch (error: any) {
    dispatch(
      showNotification({
        isVisible: true,
        text: 'Internal server error. Please reload the page.',
        type: notificationType.Error,
      })
    );
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  books: BookType[];
};

const initialState: InitialStateType = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload.books;
    });
  },
});

// export const {} = bookSlice.actions

export default bookSlice.reducer;
