import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';
import styles from '@/components/Button/Button.module.css';

const NotFoundPage = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    router.push('/');
    setIsError(true);
  };

  if (isError) {
    setIsError(false);
  }
  return (
    <section className={styles.error}>
      <h1>Oops!</h1>
      <h3>Sorry, this page doesn't exist.</h3>
      <Button
        type="button"
        disabled={false}
        value="Back to Home"
        handler={handleClick}
        addClass={styles.error}
      />
    </section>
  );
};

export default NotFoundPage;
