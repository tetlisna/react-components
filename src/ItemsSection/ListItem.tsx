import React, { FormEvent } from 'react';
import '../interface/ItemInterface';
import { ItemIterface } from '../interface/ItemInterface';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import SearchSection from '../SearchSection/SearchSection';

class ListItem extends React.Component {
  state = {
    data: [],
    hasError: false,
    loading: false,
  };
  componentDidMount(): void {
    this.fetchData(localStorage.getItem('searchValue'));
  }

  fetchData = async (search: string | null = '') => {
    try {
      const searchParam = search ? `?search=${search}` : '';
      const response = await fetch(
        `https://swapi.dev/api/people/${searchParam}`
      );
      this.setState({ loading: true });

      const dataJson = await response.json();
      this.setState({ data: dataJson.results, loading: false });
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
    localStorage.setItem('searchValue', target.search.value);
  };
  render() {
    const { data, loading } = this.state;

    return (
      <div className="items-container">
        <SearchSection handleSubmit={this.handleSubmit} />
        {data.length && !loading ? (
          data.map((e: ItemIterface) => {
            return <Item key={e.url} {...e} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default ListItem;
