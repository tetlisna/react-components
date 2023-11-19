import { Outlet } from 'react-router-dom';
import ListItems from './ListItems/ListItems';
import Pagination from './Pagination/Pagination';
import SearchSection from './SearchSection/SearchSection';
import Wrapper from './Wrapper/Wrapper';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { setCurrentPage } from '../store/reducers/ItemsSlice';
// import { useAppDispatch } from '../hooks/redux';

const Root = () => {
  // const { page } = useParams();
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setCurrentPage(page));
  // }, [dispatch]);

  return (
    <div id="sidebar">
      <Wrapper>
        <div className="container">
          <section className="right-section">
            <SearchSection />
            <Pagination />
            <ListItems />
          </section>
          <section className="left-section">
            <Outlet />
          </section>
        </div>
      </Wrapper>
    </div>
  );
};
export default Root;
