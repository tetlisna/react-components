import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useRouter } from 'next/router';
import styles from './SearchSection.module.css';
import { FaSistrix } from 'react-icons/fa';
import { setError, setSearchQuery } from '@/_store/reducers/ItemsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { FormEvent } from 'react';
import { RootState } from '@/_store/store';

const SearchSection = () => {
  const dispatch = useAppDispatch();
  // const navigate = useRouter();
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
    // navigate('/page');
    if (searchInput) {
      localStorage.setItem('searchQuery', searchInput.trim());
      dispatch(setSearchQuery(searchInput));
    } else {
      dispatch(setSearchQuery(''));
    }
  };

  return (
    <section className={styles.searchContainer}>
      <h1>React Search</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchIconWrapper}>
          <FaSistrix className={styles.searchIcon} />
          <input
            placeholder="Search..."
            name="search"
            type="search"
            className={styles.searchInput}
            aria-label="search"
            defaultValue={searchQuery}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
