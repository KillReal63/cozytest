import JokeItem from '../JokeItem/JokeItem';
import { useJokes } from '../../Hooks/useJokes';
import './UserJokes.css';
import { Jokes, addJoke } from '../../Services/Slices/Jokes/jokes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';

const UserJokes = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jokes } = useJokes();

  const userJoke =
    jokes.userJokes.length === 0
      ? JSON.parse(localStorage.getItem('favorite-jokes') as string)
      : jokes.userJokes;

  const onRemove = (id: string) => {
    const newArr = userJoke.filter((item: Jokes) => item._id !== id);
    dispatch(addJoke(newArr));
    localStorage.setItem('favorite-jokes', JSON.stringify(newArr));
  };

  return (
    <div>
      <h1 style={{ marginBottom: 5 }}>Favorite jokes</h1>
      <div className='user-jokes'>
        <JokeItem jokes={userJoke} favorite onRemove={onRemove} />
      </div>
    </div>
  );
};

export default UserJokes;
