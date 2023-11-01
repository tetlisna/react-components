import React, { FormEvent } from 'react';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';

type Props = {
  handleSubmit: (event: FormEvent) => void;
};
class SearchSection extends React.Component<Props> {
  state = {
    searchValue: '',
    hasError: false,
  };
  handleClick = () => {
    this.setState({ hasError: true });
  };
  componentDidMount(): void {
    this.setState({
      searchValue: localStorage.getItem('searchValue') || '',
    });
  }
  componentDidUpdate(): void {
    if (this.state.hasError) throw new Error();
  }

  render() {
    return (
      <section className="search-container">
        <h1>React Search</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="search-icon-wrapper">
            <span className="search-icon">
              <FaSistrix />
            </span>
            <input
              placeholder="Search..."
              name="search"
              type="text"
              className="search-input"
              defaultValue={this.state.searchValue}
            />
          </div>
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        <button type="button" onClick={this.handleClick} className="search-btn">
          Click to throw error
        </button>
      </section>
    );
  }
}

export default SearchSection;
