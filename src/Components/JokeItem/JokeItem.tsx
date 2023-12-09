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
      <h4 className='joke-containers'>Joke №{jokes.id}</h4>
      <div className='joke-containers'>
        <span className='joke-element-text'>Setup:</span>

        {jokes.setup}
      </div>
      <div className='joke-containers'>
        <span className='joke-element-text'>Punchline:</span>
        {jokes.punchline}
      </div>
      {control && control}
    </div>
  );
};

export default JokeItem;
