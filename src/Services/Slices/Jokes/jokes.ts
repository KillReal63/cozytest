import { createSlice } from '@reduxjs/toolkit';
import { fetchJoke } from '../../../Api/jokeApi';
import { RootState } from '../store';

export type Jokes = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

const initialState = {
  loading: false,
  error: null || undefined,
  data: [] as Jokes[],
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    updateJokes(state, { payload }) {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJoke.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchJoke.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateJokes } = jokesSlice.actions;

export default jokesSlice.reducer;

export const getJokes = (state: RootState) => state.jokes;
