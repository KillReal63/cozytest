import { useSelector } from 'react-redux';
import { getJokes } from '../Services/Slices/Jokes/jokes';
import { useMemo } from 'react';

export const useJokes = () => {
  const jokes = useSelector(getJokes);
  
  return useMemo(() => ({jokes}), [jokes]);
};
