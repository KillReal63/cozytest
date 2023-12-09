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
      <h1 style={{ marginBottom: 5, color: '#553f33' }}>Random jokes</h1>
      <div className='random-jokes-container custom_scroll'>
        {jokes.loading && <div>Загрузка</div>}
        {jokes.loading ||
          jokes.data.map((item, index) => (
            <JokeItem
              jokes={item}
              key={index}
              control={
                <Button onClick={() => onAdd(item.id)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='#aa7f65'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-plus-circle'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <line x1='12' y1='8' x2='12' y2='16'></line>
                    <line x1='8' y1='12' x2='16' y2='12'></line>
                  </svg>
                </Button>
              }
            />
          ))}
        {jokes.loading || (
          <Button onClick={onClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-refresh-cw'
            >
              <polyline points='23 4 23 10 17 10'></polyline>
              <polyline points='1 20 1 14 7 14'></polyline>
              <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'></path>
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RandomJokes;
