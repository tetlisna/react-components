import { useParams } from 'react-router';
import { useAppSelector } from '../../hooks/redux';
import Link from 'next/link';
import { ItemIterface } from '../../models/interfaces/interfaces';
import { useItemsListQuery } from '../../services/items-api-slice';
import { Item } from '../Item/Item';
import Loading from '../Loading/Loading';
import { RootState } from '@/_store/store';
import { searchByQuery, slicedList } from '../../helpers/helpers';
import styles from './ListItems.module.css';

const ListItems = () => {
  const { data = [], isLoading, isError } = useItemsListQuery();
  const { page, id } = useParams();

  const { searchQuery, itemsPerPage } = useAppSelector(
    (state: RootState) => state.items
  );

  let searchedItems = searchByQuery(data, searchQuery);

  searchedItems = slicedList(searchedItems, Number(page) || 1, itemsPerPage);

  return (
    <>
      <div
        className={styles.itemsContainer}
        data-testid={styles.itemsContainer}
      >
        {!isLoading && !isError ? (
          <>
            {searchedItems?.length === 0 ? (
              <div>No items found.</div>
            ) : (
              searchedItems?.map((person: ItemIterface) => (
                <Item key={person.url} {...person} />
              ))
            )}
            {id ? <Link id="overlay" href=".."></Link> : ''}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ListItems;
