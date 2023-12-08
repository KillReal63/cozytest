import { FC, ReactElement } from 'react';
import { Joke } from '../../Services/Slices/Jokes/jokes';
import './JokeItem.css';

type Props = {
  jokes: Joke;
  control: ReactElement;
};

const JokeItem: FC<Props> = ({ jokes, control }) => {
  return (
    <div className='joke-element'>
      <h4 style={{ marginBottom: 10 }}>Joke №{jokes.id}</h4>
      <div style={{ marginBottom: 10 }}>
        <span className='joke-element-text'>Setup:</span>
        {jokes.setup}
      </div>
      <div style={{ marginBottom: 10 }}>
        <span className='joke-element-text'>Punchline:</span>
        {jokes.punchline}
      </div>
      {control && control}
    </div>
  );
};

export default JokeItem;
