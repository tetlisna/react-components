import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link to="/uncontrolled-form">Uncontrolled Form</Link>
          </li>
          <li>
            <Link to="/react-hook-form">React Hook Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
