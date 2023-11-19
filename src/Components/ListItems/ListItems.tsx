import { useParams, Outlet } from 'react-router';
import { useAppSelector } from '../../hooks/redux';
import { Link } from 'react-router-dom';
import { ItemIterface } from '../../models/interfaces/interfaces';
import { useItemsListQuery } from '../../services/items-api-slice';
import { Item } from '../Item/Item';
import Loading from '../Loading/Loading';
import { RootState } from '../../store/store';
import { searchByQuery, slicedList } from '../../helpers/helpers';

const ListItems = () => {
  const { data = [], isLoading, isError } = useItemsListQuery(true);
  const { page, id } = useParams();

  const { searchQuery, itemsPerPage } = useAppSelector(
    (state: RootState) => state.items
  );

  let searchedItems = searchByQuery(data, searchQuery);

  searchedItems = slicedList(searchedItems, Number(page) || 1, itemsPerPage);

  return (
    <>
      <div className="items-container" data-testid="items-container">
        {!isLoading && !isError ? (
          <>
            {searchedItems?.length === 0 ? (
              <p>No items found.</p>
            ) : (
              searchedItems?.map((person: ItemIterface) => (
                <Item key={person.url} {...person} />
              ))
            )}
            {id ? <Link id="overlay" to=".."></Link> : ''}
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
