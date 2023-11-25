import styles from './Loading.module.css';

const Loading = () => {
  return <div className={styles.loadingSpinner} data-testid="loading"></div>;
};

export default Loading;
