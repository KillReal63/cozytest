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
      <div className='user-jokes'>
        {jokes.userJokes.map((item, index) => (
          <JokeItem
            jokes={item}
            key={index}
            control={
              <div>
                <Button onClick={() => dispatch(removeJoke(item.id))}>
                  Delete
                </Button>
                <Button onClick={() => dispatch(likeJoke(item.id))}>
                  Like: {item.likes}
                </Button>
                <Button
                  onClick={() => {
                    dispatch(dislikeJoke(item.id));
                  }}
                >
                  Dislike
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default UserJokes;
