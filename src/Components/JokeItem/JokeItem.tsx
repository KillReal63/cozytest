import { FC, PropsWithChildren } from 'react';
import Button from '../../Ui/Button/Button';
import { Jokes } from '../../Services/Slices/Jokes/jokes';
import './JokeItem.css';

type Props = {
  jokes?: Jokes[] | undefined;
  onAdd?: (id: number) => void | undefined;
  onRemove?: (id: string) => void;
  favorite?: boolean;
};

const JokeItem: FC<PropsWithChildren<Props>> = ({
  jokes,
  onAdd,
  onRemove,
  favorite,
}) => {
  const handleButtonClick = (id: any) => {
    if (favorite) {
      onRemove && onRemove(id);
    } else {
      onAdd && onAdd(id);
    }
  };

  return (
    jokes &&
    jokes.map((item, index) => (
      <div className='joke-element' key={index}>
        <h4 style={{ marginBottom: 10 }}>Joke №{item.id}</h4>
        <div style={{ marginBottom: 10 }}>
          <span className='joke-element-text'>Setup:</span>
          {item.setup}
        </div>
        <div style={{ marginBottom: 10 }}>
          <span className='joke-element-text'>Punchline:</span>
          {item.punchline}
        </div>
        <Button
          onClick={() => handleButtonClick(item._id ? item._id : item.id)}
        >
          {favorite ? 'X' : 'Add'}
        </Button>
      </div>
    ))
  );
};

export default JokeItem;
