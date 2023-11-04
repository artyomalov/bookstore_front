import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import genresRequests from '../api/filtersApi/genresRequersts';
import { GenreType } from '../types/bookTypes';
import { AxiosError } from 'axios';

export const getGenres = createAsyncThunk<
  GenreType[],
  string,
  { rejectValue: Error | AxiosError }
>('genres/getGenres', async function (empty, { rejectWithValue }) {
  try {
    const response = await genresRequests.getGengres();
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  genres: GenreType[];
  selectedGenreIds: number[];
  priceRange: {
    minValue: number;
    maxValue: number;
  };
  selectedSortType: string;
};

const initialState: InitialStateType = {
  genres: [],
  selectedGenreIds: [],
  priceRange: {
    minValue: 0,
    maxValue: 10000,
  },
  selectedSortType: 'all',
};

const genresSlice = createSlice({
  name: 'genres',
  initialState: initialState,
  reducers: {
    setSelectedGenres: (state, action: PayloadAction<number[]>) => {
      state.selectedGenreIds = [...action.payload];
    },
    setSelectedPriceRange: (
      state,
      action: PayloadAction<{ minValue: number; maxValue: number }>
    ) => {
      state.priceRange = action.payload;
    },
    setSelectedSortType: (state, action: PayloadAction<string>) => {
      state.selectedSortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export const { setSelectedGenres, setSelectedPriceRange, setSelectedSortType } =
  genresSlice.actions;

export default genresSlice.reducer;
