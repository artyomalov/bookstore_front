import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookRequersts from '../api/bookAPI/bookRequests';
import {
  BookType,
  GetBooksParamsType,
  GetBooksResponseType,
} from '../types/bookTypes';
import { AxiosError } from 'axios';

export const getBooks = createAsyncThunk<
  GetBooksResponseType,
  GetBooksParamsType,
  { rejectValue: Error | AxiosError }
>('books/getBooks', async function (params, { rejectWithValue }) {
  try {
    const response = await bookRequersts.getBooks(params, 1);
    return response.data;
  } catch (error: any) {
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
