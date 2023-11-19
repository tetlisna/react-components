import { NavLink } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { useItemDetailQuery } from '../services/items-api-slice';
import { useAppDispatch } from '../hooks/redux';
import { useEffect } from 'react';
import { setData } from '../store/reducers/ItemsSlice';

const Details = () => {
  const dispatch = useAppDispatch();

  // const { id } = useParams();

  useEffect(() => {
    handleData();
  }, [dispatch]);

  const handleData = async () => {
    dispatch(setData([]));
  };
  const { data = [], isLoading, isError } = useItemDetailQuery('');

  return (
    <div className="details">
      {isLoading && !isError ? (
        <Loading />
      ) : (
        <article className="details-card" data-testid="item-card">
          <NavLink to=".." className="close-btn"></NavLink>
          <h2 data-testid="name">{data[1]!.name}</h2>
          <p data-testid="eye_color">
            <strong>Eye color: </strong>
            {data[1]!.eye_color}
          </p>
          <p data-testid="gender">
            <strong>Gender: </strong>
            {data[1]!.gender}
          </p>
          <p data-testid="birth_year">
            <strong>Birth year: </strong>
            {data[1]!.birth_year}
          </p>
        </article>
      )}
    </div>
  );
};

export default Details;
