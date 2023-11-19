import { ChangeEvent, useEffect } from 'react';
// import { ChangeEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../models/interfaces/constants';
import './Pagination.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setItemsPerPage,
  setTotalCount,
} from '../../store/reducers/ItemsSlice';
import { useItemsListQuery } from '../../services/items-api-slice';
import { RootState } from '../../store/store';

const Pagination = () => {
  function getPages() {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  const dispatch = useAppDispatch();
  const { totalCount, itemsPerPage } = useAppSelector(
    (state: RootState) => state.items
  );
  const { data = [] } = useItemsListQuery(true);
  useEffect(() => {
    dispatch(setItemsPerPage(Number(10)));
  }, [dispatch, useItemsListQuery]);

  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const perPage = Number(e.target.value);
    dispatch(setItemsPerPage(Number(perPage)));
    dispatch(setTotalCount(Number(data.length)));
    navigate('/page');
  }
  return (
    <nav>
      <ul className="pagination">
        <select onChange={handleChange} defaultValue={ITEMS_PER_PAGE.Ten}>
          <option value={ITEMS_PER_PAGE.Five}>{ITEMS_PER_PAGE.Five}</option>
          {ITEMS_PER_PAGE.Five}
          <option value={ITEMS_PER_PAGE.Ten}>{ITEMS_PER_PAGE.Ten}</option>
          <option value={ITEMS_PER_PAGE.TwentyFive}>
            {ITEMS_PER_PAGE.TwentyFive}
          </option>
          <option value={ITEMS_PER_PAGE.Forty}>{ITEMS_PER_PAGE.Forty}</option>
        </select>

        {getPages().map((page) => (
          <li key={page}>
            <NavLink className="pagination-item" to={`/page/${page}`}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
