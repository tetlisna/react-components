import { ChangeEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../models/interfaces/constants';
import './Pagination.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setItemsPerPage,
  setTotalPages,
} from '../../store/reducers/ItemsSlice';
import { useItemsListQuery } from '../../services/items-api-slice';
import { RootState } from '../../store/store';
import { paginate, searchByQuery } from '../../helpers/helpers';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    navigate('/page');
  }
  return (
    <nav className="pagination">
      <ul>
        <select onChange={handleChange} defaultValue={ITEMS_PER_PAGE.Ten}>
          <option value={ITEMS_PER_PAGE.Five}>{ITEMS_PER_PAGE.Five}</option>
          {ITEMS_PER_PAGE.Five}
          <option value={ITEMS_PER_PAGE.Ten}>{ITEMS_PER_PAGE.Ten}</option>
          <option value={ITEMS_PER_PAGE.TwentyFive}>
            {ITEMS_PER_PAGE.TwentyFive}
          </option>
          <option value={ITEMS_PER_PAGE.Forty}>{ITEMS_PER_PAGE.Forty}</option>
        </select>
        {pagesList.map((page, i) => (
          <NavLink key={i} className="pagination-item" to={`/page/${page}`}>
            {page}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
