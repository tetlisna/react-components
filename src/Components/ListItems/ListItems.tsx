import { useAppSelector } from '../../hooks/redux';
import Link from 'next/link';
import { ItemIterface } from '../../models/interfaces/interfaces';
import { useItemsListQuery } from '../../services/items-api-slice';
import { Item } from '../Item/[id]';
import Loading from '../Loading/Loading';
import { RootState } from '@/_store/store';
import { searchByQuery, slicedList } from '../../helpers/helpers';
import styles from './ListItems.module.css';
import { useRouter } from 'next/router';

const ListItems = () => {
  const { data = [], isFetching, isError } = useItemsListQuery();
  const router = useRouter();
  const page = router.query.page;

  const { searchQuery, itemsPerPage } = useAppSelector(
    (state: RootState) => state.items
  );

  let searchedItems = searchByQuery(data, searchQuery);

  searchedItems = slicedList(searchedItems, Number(page) || 1, itemsPerPage);

  return (
    <div className={styles.itemsContainer} data-testid={styles.itemsContainer}>
      {!isFetching && !isError ? (
        <>
          {searchedItems?.length === 0 ? (
            <div>No items found.</div>
          ) : (
            searchedItems?.map((person: ItemIterface) => (
              <Item key={person.url} {...person} />
            ))
          )}
          {router.query.id ? <Link id="overlay" href=".." /> : ''}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ListItems;
