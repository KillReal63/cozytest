import { createSlice } from '@reduxjs/toolkit';
import { fetchJoke } from '../../../api/jokeApi';
import _ from 'lodash';
import { getLocal, setLocal } from '../../../helpers/localStorage';

export type Joke = {
  length: number;
  id: number;
  type: string;
  setup: string;
  punchline: string;
  likes: number;
};

export type Jokes = {
  jokes: {
    loading: boolean;
    error: string | null;
    data: Joke[];
    userJokes: Joke[];
  };
};

const initialState = {
  loading: false,
  error: null as string | null,
  data: [],
  userJokes: getLocal(),
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    addJoke(state, { payload }) {
      if (state.userJokes.length !== 0) {
        state.userJokes = _.uniqBy([...state.userJokes, payload], 'id');
      } else {
        state.userJokes = [payload];
      }
      setLocal(state.userJokes);
    },
    removeJoke(state, { payload }) {
      state.userJokes = state.userJokes.filter(
        ({ id }: Joke) => id !== payload,
      );
      setLocal(state.userJokes);
    },
    likeJoke(state, { payload }) {
      state.userJokes = state.userJokes.map((item: Joke) => {
        if (item.id === payload) {
          item.likes += 1;
          return item;
        } else {
          return item;
        }
      });
      setLocal(state.userJokes);
    },
    dislikeJoke(state, { payload }) {
      state.userJokes = state.userJokes.map((item: Joke) => {
        if (item.id === payload) {
          item.likes -= 1;
          return item;
        } else {
          return item;
        }
      });
      setLocal(state.userJokes);
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
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.toString();
      });
  },
});

export const { addJoke, removeJoke, likeJoke, dislikeJoke } =
  jokesSlice.actions;

export default jokesSlice.reducer;

export const getJokes = (state: Jokes) => state.jokes;
