import { Outlet } from 'react-router-dom';
import ListItems from '@/components/ListItems/ListItems';
import Pagination from '@/components/Pagination/Pagination';
import SearchSection from '@/components/SearchSection/SearchSection';
import Wrapper from '@/components/Wrapper/Wrapper';
import styles from './Root.module.css';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setError } from '@/_store/reducers/ItemsSlice';

const Root = () => {
  const dispatch = useAppDispatch();
  const { isError } = useAppSelector((state) => state.items);
  function clickError() {
    dispatch(setError());
    console.log('clickError', isError);

    // throw new Error('Error btn clicked');
  }
  return (
    <div id="sidebar">
      <Wrapper>
        <div className={styles.container}>
          <section className={styles.rightSection}>
            <SearchSection />
            <Button
              type="submit"
              addClass={styles.searchBtn}
              value={'Error!'}
              handler={clickError}
            />
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
