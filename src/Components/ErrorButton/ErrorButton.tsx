import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ErrorButton.module.css';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(true);
  };

  if (isError) {
    setIsError(false);

    // throw new Error('Error btn clicked');
  }
  return (
    <Button
      type="button"
      disabled={false}
      value="Click to throw error"
      handler={handleClick}
      addClass={styles.searchBtn}
    />
  );
};

export default ErrorButton;
