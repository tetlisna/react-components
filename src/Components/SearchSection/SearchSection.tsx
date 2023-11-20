import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';
import { setError, setSearchQuery } from '../../store/reducers/ItemsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormEvent } from 'react';
import { RootState } from '../../store/store';
import NotFoundPage from '../ErrorBoundary/NotFoundPage';

const SearchSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searchQuery, isError } = useAppSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    handleClick();
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setError());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    localStorage.setItem('searchQuery', target.search.value.trim());
    dispatch(setSearchQuery(target.search.value.trim()));
    navigate('/page');
  };

  return isError ? (
    <section className="search-container">
      <h1>React Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="search-icon-wrapper">
          <FaSistrix className="search-icon" />
          <input
            placeholder="Search..."
            name="search"
            type="search"
            className="search-input"
            aria-label="search"
            defaultValue={searchQuery}
          />
        </div>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <button type="button" onClick={handleClick} className="search-btn">
        Click to throw error
      </button>
    </section>
  ) : (
    <NotFoundPage />
  );
};

export default SearchSection;
