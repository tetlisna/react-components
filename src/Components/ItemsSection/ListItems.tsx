import { ChangeEvent, useEffect, useState } from 'react';
import '../../interface/ItemInterface';
import { ItemIterface } from '../../interface/ItemInterface';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fetchData } from '../../utils/api';
import Pagination from '../Pagination/Pagination';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface State {
  data: ItemIterface[];
  hasError: boolean;
  isLoading: boolean;
  totalCount: number;
}
type Props = {
  searchQuery: string | null;
};
const ListItems = ({ searchQuery }: Props) => {
  const [allPeoples, setAllPeoples] = useState([] as ItemIterface[]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [state, setState] = useState<State>({
    data: [],
    hasError: false,
    isLoading: true,
    totalCount: 0,
  });
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchedData(searchQuery);
  }, [searchQuery, page, itemsPerPage]);

  async function fetchedData(search: string | null = ''): Promise<void> {
    setState({
      data: [],
      isLoading: true,
      hasError: false,
      totalCount: 0,
    });
    try {
      let peoples: ItemIterface[] = [];
      if (!allPeoples || !allPeoples.length) {
        const promises = [];
        for (let i = 1; i <= 9; i++) {
          promises.push(fetchData('', i));
        }
        const allDataJson = await Promise.all(promises);
        for (const chunk of allDataJson) {
          peoples = [...peoples, ...chunk.results];
        }
        setAllPeoples(peoples);
      } else {
        peoples = allPeoples;
      }

      let data = [...peoples];

      if (search) {
        data = data.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      const totalCount = data.length;
      const currentPage = page ? Number(page) : 1;

      const from = (currentPage - 1) * itemsPerPage;
      const to = itemsPerPage * currentPage;
      if (to > totalCount) {
        data = data.slice(from);
      } else {
        data = data.slice(from, to);
      }
      setState({
        data,
        isLoading: false,
        hasError: false,
        totalCount: totalCount,
      });
    } catch (error) {
      setState({
        data: [],
        isLoading: true,
        hasError: true,
        totalCount: 0,
      });
    }
  }
  const { data, isLoading, hasError, totalCount } = state;

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const perPage = e.target.value;
    navigate('/list-item');
    setItemsPerPage(Number(perPage));
  }
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
      <Pagination
        totalCount={totalCount}
        pageNumber={Number(page || 1)}
        itemsPerPage={itemsPerPage || 10}
        handleChange={handleChange}
      />
    </ErrorBoundary>
  );
};

export default ListItems;
