import { FormEvent, useEffect, useState } from 'react';
import '../../interface/ItemInterface';
import { ItemIterface } from '../../interface/ItemInterface';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import SearchSection from '../SearchSection/SearchSection';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import { fetchData } from '../../utils/api';
interface State {
  data: ItemIterface[];
  hasError: boolean;
  isLoading: boolean;
}
interface ResponseType {
  results: ItemIterface[];
  // Add any other properties you expect in the response here
}
const API_URL = `https://swapi.dev/api/people`;

const ListItem = () => {
  const [state, setState] = useState<State>({
    data: [],
    hasError: false,
    isLoading: true,
  });

  useEffect(() => {
    fetchData(localStorage.getItem('searchValue'));
  }, []);

  async function fetchData(search: string | null = ''): Promise<void> {
    setState({ data: [], isLoading: true, hasError: false });
    try {
      const searchParam = search ? `?search=${search}` : '';
      const response = await fetch(`${API_URL}/${searchParam}`);
      const dataJson: ResponseType = await response.json();
      setState({ data: dataJson.results, isLoading: false, hasError: false });
    } catch (error) {
      setState({
        data: [],
        isLoading: true,
        hasError: true,
      });
    }
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    fetchData(target.search.value);
    localStorage.setItem('searchValue', target.search.value.trim());
  }

  const { data, isLoading, hasError } = state;
  console.log(hasError, 'hasError');

  return (
    <ErrorBoundary>
      <SearchSection handleSubmit={handleSubmit} />
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
  );
};

export default ListItem;
