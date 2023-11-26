import { ChildrenProps } from '../../models/types/types';
import styles from './Wrapper.module.css';

const Wrapper = ({ children }: ChildrenProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
