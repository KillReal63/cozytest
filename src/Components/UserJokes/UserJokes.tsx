import JokeItem from '../JokeItem/JokeItem';
import './UserJokes.css';
import {
  Jokes,
  dislikeJoke,
  likeJoke,
  removeJoke,
} from '../../Services/Slices/Jokes/jokes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Services/Slices/store';
import { FC } from 'react';
import Button from '../../Ui/Button/Button';

const UserJokes: FC<Jokes> = ({ jokes }) => {
  const dispatch: AppDispatch = useDispatch();

  console.log(jokes.userJokes);

  return (
    <div>
      <h1 style={{ marginBottom: 5 }}>Favorite jokes</h1>
      <div className='user-jokes custom_scroll'>
        {jokes.userJokes.map((item, index) => (
          <JokeItem
            jokes={item}
            key={index}
            control={
              <div className='control-panel'>
                <Button onClick={() => dispatch(removeJoke(item.id))}>
                  Delete
                </Button>
                <span style={{ fontWeight: 'bold' }}>Likes: {item.likes}</span>
                <div className='counter'>
                  <Button onClick={() => dispatch(likeJoke(item.id))}>
                    <svg
                      width='20px'
                      height='20px'
                      viewBox='0 0 48 48'
                      version='1'
                      xmlns='http://www.w3.org/2000/svg'
                      enable-background='new 0 0 48 48'
                    >
                      <path
                        fill='#F44336'
                        d='M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z'
                      />
                    </svg>
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(dislikeJoke(item.id));
                    }}
                  >
                    <svg
                      width='20px'
                      height='20px'
                      viewBox='0 0 48 48'
                      version='1'
                      xmlns='http://www.w3.org/2000/svg'
                      enable-background='new 0 0 48 48'
                    >
                      <path
                        fill='#000000'
                        d='M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z'
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default UserJokes;
