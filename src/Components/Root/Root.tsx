import { Outlet } from 'react-router-dom';
import ListItems from '../ListItems/ListItems';
import Pagination from '../Pagination/Pagination';
import SearchSection from '../SearchSection/SearchSection';
import Wrapper from '../Wrapper/Wrapper';
import ErrorButton from '../ErrorButton/ErrorButton';

const Root = () => {
  return (
    <div id="sidebar">
      <Wrapper>
        <div className="container">
          <section className="right-section">
            <SearchSection />
            <ErrorButton />
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
