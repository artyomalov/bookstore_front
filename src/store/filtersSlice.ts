import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import filtersRequests from '../api/filtersApi/filtersRequersts';
import { GenreType } from '../types/bookTypes';
import { AxiosError } from 'axios';

export const getGenres = createAsyncThunk<
  GenreType[],
  string,
  { rejectValue: Error | AxiosError }
>('genres/getGenres', async function (empty, { rejectWithValue }) {
  try {
    const response = await filtersRequests.getGengres();
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error());
  }
});

type InitialStateType = {
  genres: GenreType[];
  selectedGenres: number[];
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  selectedSortType: string;
};

const initialState: InitialStateType = {
  genres: [],
  selectedGenres: [],
  priceRange: {
    minPrice: 0,
    maxPrice: 100,
  },
  selectedSortType: 'id',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setSelectedGenres: (state, action: PayloadAction<number[]>) => {
      state.selectedGenres = [...action.payload];
    },
    setSelectedPriceRange: (
      state,
      action: PayloadAction<{ minPrice: number; maxPrice: number }>
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
  filtersSlice.actions;

export default filtersSlice.reducer;
