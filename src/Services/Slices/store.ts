import { configureStore } from '@reduxjs/toolkit';
import jokesSlice from './Jokes/jokes';

const reducer = {
  jokes: jokesSlice,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;