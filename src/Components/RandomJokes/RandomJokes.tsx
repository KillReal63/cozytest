import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { useJokes } from '../../Hooks/useJokes';
import { fetchJoke } from '../../api/jokeApi';
import JokeItem from '../JokeItem/JokeItem';
import Button from '../../Ui/Button/Button';
import { addJoke } from '../../Services/Slices/Jokes/jokes';
import { v4 as uuidv4 } from 'uuid';
import './RandomJokes.css';

const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';

const RandomJokes = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jokes } = useJokes();

  const userJoke =
  jokes.userJokes.length === 0
    ? JSON.parse(localStorage.getItem('favorite-jokes') as string)
    : jokes.userJokes;

  if (jokes.loading) return <div>Загрузка</div>;

  const onClick = () => dispatch(fetchJoke(url));

  const onAdd = (id: number) => {
    const joke = jokes.data.find((item) => item.id === id);
    const updatedJokes = [...userJoke, { ...joke, _id: uuidv4() }];
    dispatch(addJoke(updatedJokes));
    localStorage.setItem('favorite-jokes', JSON.stringify(updatedJokes));
  };

  return (
    <div className='random-jokes-container'>
      <h1 style={{ marginBottom: 5 }}>Random jokes</h1>
      <JokeItem jokes={jokes.data} onAdd={onAdd} />
      <Button onClick={onClick}>Update jokes</Button>
    </div>
  );
};

export default RandomJokes;
