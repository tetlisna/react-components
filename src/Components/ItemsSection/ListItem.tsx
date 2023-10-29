import React, { FormEvent } from 'react';
import '../../interface/ItemInterface';
import { ItemIterface } from '../../interface/ItemInterface';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import SearchSection from '../SearchSection/SearchSection';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class ListItem extends React.Component {
  state = {
    data: [],
    hasError: false,
    isLoading: true,
  };
  componentDidMount(): void {
    this.fetchData(localStorage.getItem('searchValue'));
  }

  fetchData = async (search: string | null = '') => {
    this.setState({ data: [], isLoading: true });
    try {
      const searchParam = search ? `?search=${search}` : '';
      const response = await fetch(
        `https://swapi.dev/api/people/${searchParam}`
      );
      this.setState({ isLoading: true });
      const dataJson = await response.json();
      this.setState({ data: dataJson.results, isLoading: false });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };
  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    this.fetchData(target.search.value);
    localStorage.setItem('searchValue', target.search.value.trim());
  };

  render() {
    const { data, isLoading, hasError } = this.state;
    console.log(hasError, 'hasError');

    return (
      <>
        <ErrorBoundary>
          <SearchSection handleSubmit={this.handleSubmit} />
          <div className="items-container">
            {!isLoading && !hasError ? (
              data.map((e: ItemIterface) => {
                return <Item key={e.url} {...e} />;
              })
            ) : (
              <Loading />
            )}
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default ListItem;
