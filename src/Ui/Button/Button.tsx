import { PropsWithChildren, FC } from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return (
    <button className='ui-button' onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
