import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';
import { setError, setSearchQuery } from '../../store/reducers/ItemsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { FormEvent } from 'react';
import { RootState } from '../../store/store';

const SearchSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>('');

  const searchQuery = useAppSelector(
    (state: RootState) => state.items.searchQuery || ''
  );

  useEffect(() => {
    handleClick();
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setError());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/page');
    if (searchInput) {
      localStorage.setItem('searchQuery', searchInput.trim());
      dispatch(setSearchQuery(searchInput));
    } else {
      dispatch(setSearchQuery(''));
    }
  };

  return (
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
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
