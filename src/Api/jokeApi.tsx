import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJoke = createAsyncThunk('joke', async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('fetch error');
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});
