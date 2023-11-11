import SearchSection from './SearchSection/SearchSection';
import ListItems from './ItemsSection/ListItems';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootContext } from '../context/context';

const Root = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') || ''
  );

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
      <RootContext.Provider value={{ searchQuery, handleSubmit }}>
        <SearchSection />
        <ListItems />
      </RootContext.Provider>
    </div>
  );
};
export default Root;
