import { ChangeEventHandler } from 'react';
import '../Pagination/Pagination.css';
import { NavLink } from 'react-router-dom';

type Props = {
  totalCount: number;
  pageNumber: number;
  itemsPerPage: number;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const Pagination = ({ totalCount, itemsPerPage, handleChange }: Props) => {
  function getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalCount / itemsPerPage); i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <nav>
      <ul className="pagination">
        <select onChange={handleChange} defaultValue={itemsPerPage}>
          <option>5</option>
          <option>10</option>
          <option>25</option>
          <option>40</option>
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
