import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { fetchJoke } from '../../api/jokeApi';
import { Jokes, addJoke } from '../../Services/Slices/Jokes/jokes';
import JokeItem from '../JokeItem/JokeItem';
import Button from '../../Ui/Button/Button';
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
    <div>
      <h1 style={{ marginBottom: 5 }}>Random jokes</h1>
      <div className='random-jokes-container custom_scroll'>
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
    </div>
  );
};

export default RandomJokes;
