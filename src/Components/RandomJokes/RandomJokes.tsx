import JokeItem from '../JokeItem/JokeItem';
import Button from '../../Ui/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { useJokes } from '../../Hooks/useJokes';
import { fetchJoke } from '../../Api/jokeApi';
import './RandomJokes.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';

const RandomJokes = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jokes } = useJokes();

  if (jokes.loading) return <div>Загрузка</div>;

  const onClick = () => dispatch(fetchJoke(url));

  return (
    <div className='random-jokes-container'>
      <h1 style={{ marginBottom: 5 }}>Random jokes</h1>
      <JokeItem jokes={jokes.data} />
      <Button onClick={onClick}>Update jokes</Button>
    </div>
  );
};

export default RandomJokes;
