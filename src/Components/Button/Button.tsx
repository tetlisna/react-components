import { FC } from 'react';
import styles from './Button.module.css';

export interface IButton {
  value: string;
  type: 'button' | 'submit' | 'reset';
  handler: React.MouseEventHandler;
  disabled?: boolean;
  addClass?: string;
}

const Button: FC<IButton> = ({ value, type, handler, disabled }) => {
  return (
    <button
      // className={`button ${addClass || ''}`}
      className={styles.button}
      // className={`${styles.button} ${addClass || ''}`}
      onClick={handler}
      type={type}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
