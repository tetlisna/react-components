import { useEffect, useState } from 'react';
import '../../interface/ItemInterface';
import { IitemsList, ItemIterface } from '../../interface/ItemInterface';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fetchData } from '../../utils/api';

interface State {
  data: ItemIterface[];
  hasError: boolean;
  isLoading: boolean;
}
type Props = {
  searchQuery: string | null;
};
const ListItems = ({ searchQuery }: Props) => {
  const [state, setState] = useState<State>({
    data: [],
    hasError: false,
    isLoading: true,
  });

  useEffect(() => {
    fetchedData(searchQuery);
  }, [searchQuery]);

  async function fetchedData(search: string | null = ''): Promise<void> {
    setState({ data: [], isLoading: true, hasError: false });
    try {
      const dataJson: IitemsList = await fetchData(search);
      console.log(dataJson, 'dataJson');

      setState({ data: dataJson.results, isLoading: false, hasError: false });
    } catch (error) {
      setState({
        data: [],
        isLoading: true,
        hasError: true,
      });
    }
  }

  const { data, isLoading, hasError } = state;

  return (
    <ErrorBoundary>
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

export default ListItems;
