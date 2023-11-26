import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.css';

export interface IButton {
  value: string;
  type: 'button' | 'submit' | 'reset';
  handler?: MouseEventHandler<Element> | undefined;
  disabled?: boolean;
  addClass?: string;
}

const Button: FC<IButton> = ({ value, type, handler, disabled, addClass }) => {
  return (
    <button
      className={`${styles.button} ${addClass || ''}`}
      onClick={handler}
      type={type}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
