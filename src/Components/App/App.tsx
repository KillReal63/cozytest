import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { fetchJoke } from '../../Api/jokeApi';
import RandomJokes from '../RandomJokes/RandomJokes';
import UserJokes from '../UserJokes/UserJokes';
import './App.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJoke(url));
  }, [dispatch]);

  return (
    <div>
      <RandomJokes />
      <UserJokes />
    </div>
  );
}

export default App;
