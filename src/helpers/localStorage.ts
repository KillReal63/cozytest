import { Joke, Jokes } from '../Services/Slices/Jokes/jokes';

const k = 'favorite-jokes';

export const setLocal = (items: Joke | Jokes) => {
  try {
    const serializedData = JSON.stringify(items);
    localStorage.setItem(k, serializedData);
  } catch (err) {
    console.error(err);
  }
};

export const getLocal = () => {
  try {
    const serializedData = localStorage.getItem(k);
    if (!serializedData) return [];
    return JSON.parse(serializedData);
  } catch (err) {
    console.error(err);
  }
};
