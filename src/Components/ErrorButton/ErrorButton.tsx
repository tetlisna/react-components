import { useState } from 'react';
import Button from '../Button/Button';
import './ErrorButton.css';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('Error btn clicked');
  }

  return (
    <Button
      type="button"
      disabled={false}
      value="Click to throw error"
      handler={handleClick}
      addClass="search-btn"
    />
  );
};

export default ErrorButton;
