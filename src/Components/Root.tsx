import SearchSection from './SearchSection/SearchSection';
import ListItems from './ItemsSection/ListItems';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { NavBar } from './NavBar/Navbar';

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
    <ErrorBoundary>
      <NavBar />
      <div id="sidebar">
        <div className="left-wrapper">
          <SearchSection
            searchQuery={searchQuery}
            handleSubmit={handleSubmit}
          />
          <ListItems searchQuery={searchQuery} />
        </div>
        <div className="right-wrapper"></div>
      </div>
    </ErrorBoundary>
  );
};
export default Root;
