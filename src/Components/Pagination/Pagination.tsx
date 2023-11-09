import { ChangeEventHandler } from 'react';
import '../Pagination/Pagination.css';
import { NavLink } from 'react-router-dom';
import { ITEMS_PER_PAGE } from 'interfaces/constants';

type Props = {
  totalCount: number;
  pageNumber: number;
  itemsPerPage: number;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const Pagination = ({ totalCount, itemsPerPage, handleChange }: Props) => {
  function getPages() {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
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
            <NavLink className="pagination-item" to={`/list-item/${page}`}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
