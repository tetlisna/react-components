import { useContext, useEffect, useState } from 'react';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';
import { RootContext } from 'context/context';

const SearchSection = () => {
  const [state, setState] = useState({
    searchQuery: '',
    hasError: false,
  });

  const { searchQuery, handleSubmit } = useContext(RootContext);
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, hasError: true }));
  };

  useEffect(() => {
    if (state.hasError) throw new Error();
    setState({
      searchQuery: localStorage.getItem('searchQuery') || '',
      hasError: false,
    });
  }, [state.hasError]);

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
  );
};

export default SearchSection;
