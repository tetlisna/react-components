import SearchSection from './SearchSection/SearchSection';
import ListItems from './ItemsSection/ListItems';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootContext } from '../context/context';
import { ITEMS_PER_PAGE } from 'interfaces/constants';
import { ItemIterface } from 'interfaces/interfaces';

const Root = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') || ''
  );
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE.Ten);
  // const [state, setState] = useState<IState>({
  //   data: [],
  //   hasError: false,
  //   isLoading: true,
  //   totalCount: 0,
  // });
  const [data, setData] = useState([] as ItemIterface[]);
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [allPeoples, setAllPeoples] = useState([] as ItemIterface[]);

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    setSearchQuery(target.search.value.trim());
    localStorage.setItem('searchQuery', target.search.value.trim());
    navigate('/list-item');
  }

  return (
    <div id="sidebar">
      <RootContext.Provider
        value={{
          searchQuery,
          handleSubmit,
          itemsPerPage,
          setItemsPerPage,
          data,
          hasError,
          isLoading,
          totalCount,
          setData,
          setTotalCount,
          setError,
          setIsLoading,
          allPeoples,
          setAllPeoples,
        }}
      >
        <SearchSection />
        <ListItems />
      </RootContext.Provider>
    </div>
  );
};
export default Root;
