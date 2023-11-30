import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function NotFound() {
  return (
    <div className={styles.main}>
      <h2>Not Found</h2>
      <Link to="/">Go to the home page</Link>
    </div>
  );
}
