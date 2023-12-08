import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { fetchJoke } from '../../api/jokeApi';
import JokeItem from '../JokeItem/JokeItem';
import Button from '../../Ui/Button/Button';
import { Jokes, addJoke } from '../../Services/Slices/Jokes/jokes';
import './RandomJokes.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';

const RandomJokes: FC<Jokes> = ({ jokes }) => {
  const dispatch: AppDispatch = useDispatch();
  const onClick = () => dispatch(fetchJoke(url));

  const onAdd = (id: number) => {
    const joke = jokes.data.find((item) => item.id === id);
    dispatch(addJoke({ ...joke, likes: 0 }));
  };

  return (
    <div className='random-jokes-container'>
      <h1 style={{ marginBottom: 5 }}>Random jokes</h1>
      {jokes.loading && <div>Загрузка</div>}
      {jokes.loading ||
        jokes.data.map((item, index) => (
          <JokeItem
            jokes={item}
            key={index}
            control={<Button onClick={() => onAdd(item.id)}>Add</Button>}
          />
        ))}
      {jokes.loading || <Button onClick={onClick}>Update jokes</Button>}
    </div>
  );
};

export default RandomJokes;
