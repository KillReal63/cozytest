import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { fetchJoke } from '../../api/jokeApi';
import RandomJokes from '../RandomJokes/RandomJokes';
import UserJokes from '../UserJokes/UserJokes';
import { useJokes } from '../../hooks/useJokes';
import './App.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const { jokes } = useJokes();

  useEffect(() => {
    dispatch(fetchJoke(url));
  }, [dispatch]);

  return (
    <div className='app'>
      <RandomJokes jokes={jokes} />
      <UserJokes jokes={jokes} />
    </div>
  );
}

export default App;
