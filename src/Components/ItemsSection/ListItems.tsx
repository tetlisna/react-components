import { ChangeEvent, useEffect, useState } from 'react';
import '../../interfaces/interfaces';
import { ItemsList, ItemIterface } from '../../interfaces/interfaces';
import { Item } from '../Item/Item';
import Loading from '../Loading/Loading';
import { fetchData } from '../../services/api';
import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { ITEMS_PER_PAGE } from 'interfaces/constants';

interface IState {
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
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE.Ten);
  const [state, setState] = useState<IState>({
    data: [],
    hasError: false,
    isLoading: true,
    totalCount: 0,
  });

  const { page, id } = useParams();
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

        for (let i = 1; i < ITEMS_PER_PAGE.Ten; i++) {
          promises.push(fetchData<ItemsList>({ search: '', page: i }));
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
      throw new Error('fetch error');
    }
  }
  const { data, isLoading, hasError, totalCount } = state;

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const perPage = e.target.value;
    navigate('/list-item');
    setItemsPerPage(Number(perPage));
  }
  return (
    <>
      <Pagination
        totalCount={totalCount}
        pageNumber={Number(page || 1)}
        itemsPerPage={itemsPerPage || ITEMS_PER_PAGE.Ten}
        handleChange={handleChange}
      />
      <div className="items-container">
        {!isLoading && !hasError ? (
          <>
            {data.map((person: ItemIterface) => {
              return <Item key={person.url} {...person} />;
            })}
            {id ? <NavLink id="overlay" to=".."></NavLink> : ''}
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default ListItems;
