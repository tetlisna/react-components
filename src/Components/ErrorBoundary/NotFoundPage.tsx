import styles from './ErrorBoundary.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.NotFoundPage}>
      <h1>Oops!</h1>
      <h3>Sorry, this page doesn't exist.</h3>
    </section>
  );
};

export default NotFoundPage;
