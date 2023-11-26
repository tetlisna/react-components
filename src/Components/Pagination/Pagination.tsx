import { ChangeEvent } from 'react';
import NavLink from 'next/link';
import { ITEMS_PER_PAGE } from '@/models/interfaces/constants';
import styles from './Pagination.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useItemsListQuery } from '@/services/items-api-slice';
// import { useRouter } from 'next/router';
import { paginate, searchByQuery } from '@/helpers/helpers';
import { RootState } from '@/_store/store';
import { setItemsPerPage, setTotalPages } from '@/_store/reducers/ItemsSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();
  // const navigate = useRouter();

  const { itemsPerPage, totalPages, searchQuery } = useAppSelector(
    (state: RootState) => state.items
  );

  let { data = [] } = useItemsListQuery();
  data = searchByQuery(data, searchQuery);

  const pagesList = paginate(data, itemsPerPage);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const perPage = Number(e.target.value);
    dispatch(setItemsPerPage(Number(perPage)));
    dispatch(setTotalPages(Number(totalPages)));
    // navigate('/page');
  }
  return (
    <nav className={styles.pagination}>
      <ul>
        <select
          onChange={handleChange}
          defaultValue={ITEMS_PER_PAGE.Ten}
          className={styles.select}
        >
          <option value={ITEMS_PER_PAGE.Five}>{ITEMS_PER_PAGE.Five}</option>
          {ITEMS_PER_PAGE.Five}
          <option value={ITEMS_PER_PAGE.Ten}>{ITEMS_PER_PAGE.Ten}</option>
          <option value={ITEMS_PER_PAGE.TwentyFive}>
            {ITEMS_PER_PAGE.TwentyFive}
          </option>
          <option value={ITEMS_PER_PAGE.Forty}>{ITEMS_PER_PAGE.Forty}</option>
        </select>
        {pagesList.map((page, i) => (
          <NavLink
            key={i}
            className={styles.paginationItem}
            href={`/page/${page}`}
          >
            {page}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
