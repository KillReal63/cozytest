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

  return (
    <div>
      <h1 style={{ marginBottom: 5, color: '#553f33' }}>Favorite jokes</h1>
      <div className='user-jokes custom_scroll'>
        {jokes.userJokes.map((item, index) => (
          <JokeItem
            jokes={item}
            key={index}
            control={
              <div className='control-panel'>
                <Button onClick={() => dispatch(removeJoke(item.id))}>
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
                    className='feather feather-trash-2'
                  >
                    <polyline points='3 6 5 6 21 6'></polyline>
                    <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                    <line x1='10' y1='11' x2='10' y2='17'></line>
                    <line x1='14' y1='11' x2='14' y2='17'></line>
                  </svg>
                </Button>
                <span style={{ fontWeight: 'bold' }}>Likes: {item.likes}</span>
                <div>
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
                      enableBackground='new 0 0 48 48'
                    >
                      <path
                        fill='#F44336'
                        d='M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z'
                      />
                      <rect
                        x='22'
                        y='-2.9'
                        transform='matrix(.707 -.707 .707 .707 -9.941 24)'
                        fill='#37474F'
                        width='4'
                        height='53.7'
                      />
                    </svg>
                  </Button>
                  <Button onClick={() => dispatch(likeJoke(item.id))}>
                    <svg
                      width='20px'
                      height='20px'
                      viewBox='0 0 48 48'
                      version='1'
                      xmlns='http://www.w3.org/2000/svg'
                      enableBackground='new 0 0 48 48'
                    >
                      <path
                        fill='#F44336'
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
