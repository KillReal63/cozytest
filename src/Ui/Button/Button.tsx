import { PropsWithChildren, FC } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return <button onClick={() => onClick()}>{children}</button>;
};

export default Button;
