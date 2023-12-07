import { useState, FC, PropsWithChildren } from 'react';
import Button from '../../Ui/Button/Button';
import { Jokes } from '../../Services/Slices/Jokes/jokes';
import './JokeItem.css';

type Props = {
  jokes?: Jokes[] | undefined;
  onAdd?: () => void;
  onRemove?: () => void;
  favorite?: boolean;
};

const JokeItem: FC<PropsWithChildren<Props>> = ({
  jokes,
  onAdd,
  onRemove,
  favorite,
}) => {
  const [isAdded, setIsAdded] = useState(favorite);

  // console.log(jokes, 'jokes');

  const handleButtonClick = () => {
    // if (isAdded) {
    //   onRemove();
    // } else {
    //   onAdd();
    // }
    setIsAdded(!isAdded);
  };

  const JokeElement =
    jokes &&
    jokes.map((item) => (
      <div className='joke-element' key={item.id}>
        <h4 style={{ marginBottom: 10 }}>Joke №{item.id}</h4>
        <div style={{ marginBottom: 10 }}>
          <span className='joke-element-text'>Setup:</span>
          {item.setup}
        </div>
        <div style={{ marginBottom: 10 }}>
          <span className='joke-element-text'>Punchline:</span>
          {item.punchline}
        </div>
        <Button onClick={handleButtonClick}>{isAdded ? 'X' : 'Add'}</Button>
      </div>
    ));

  return JokeElement;
};

export default JokeItem;
