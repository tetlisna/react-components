import { Outlet } from 'react-router-dom';
import ListItems from '@/components/ListItems/ListItems';
import Pagination from '@/components/Pagination/Pagination';
import SearchSection from '@/components/SearchSection/SearchSection';
import Wrapper from '@/components/Wrapper/Wrapper';
import ErrorButton from '@/components/ErrorButton/ErrorButton';
import styles from './Root.module.css';

const Root = () => {
  return (
    <div id="sidebar">
      <Wrapper>
        <div className={styles.container}>
          <section className={styles.rightSection}>
            <SearchSection />
            <ErrorButton />
            <Pagination />
            <ListItems />
          </section>
          <section className={styles.leftSection}>
            <Outlet />
          </section>
        </div>
      </Wrapper>
    </div>
  );
};
export default Root;
