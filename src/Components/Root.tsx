// import Pagination from './Pagination';
import SearchSection from './SearchSection/SearchSection';
import ListItems from './ItemsSection/ListItems';
import { Details } from '../pages/Details';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchValue')
  );
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    setSearchQuery(target.search.value.trim());
    localStorage.setItem('searchValue', target.search.value.trim());
    navigate('/list-item');
  }

  return (
    <>
      <div id="sidebar">
        <div>
          <SearchSection
            searchQuery={searchQuery}
            handleSubmit={handleSubmit}
          />
        </div>
        <ListItems searchQuery={searchQuery} />
      </div>
      <div id="detail">
        <Details />
      </div>
    </>
  );
};
export default Root;
