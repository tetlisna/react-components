import { FormEvent, useEffect, useState } from 'react';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

type Props = {
  handleSubmit: (event: FormEvent) => void;
  searchQuery: string | null;
};
const SearchSection = (props: Props) => {
  const [state, setState] = useState({
    searchValue: '',
    hasError: false,
  });
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, hasError: true }));
  };
  useEffect(() => {
    if (state.hasError) throw new Error();
    setState({
      searchValue: localStorage.getItem('searchValue') || '',
      hasError: false,
    });
  }, [state.hasError]);

  return (
    <ErrorBoundary>
      <section className="search-container">
        <h1>React Search</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="search-icon-wrapper">
            <FaSistrix className="search-icon" />
            <input
              placeholder="Search..."
              name="search"
              type="search"
              className="search-input"
              aria-label="search"
              defaultValue={state.searchValue}
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
    </ErrorBoundary>
  );
};

export default SearchSection;
