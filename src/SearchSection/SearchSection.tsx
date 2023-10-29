import React, { FormEvent } from 'react';
import './SearchSection.css';
import { FaSistrix } from 'react-icons/fa';

type Props = {
  handleSubmit: (event: FormEvent) => void;
};
class SearchSection extends React.Component<Props> {
  state = {
    searchValue: '',
  };
  componentDidMount(): void {
    this.setState({
      searchValue: localStorage.getItem('searchValue') || '',
    });
  }
console.log('mm');

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
      </section>
    );
  }
}

export default SearchSection;
