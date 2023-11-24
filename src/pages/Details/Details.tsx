import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useItemDetailQuery } from '../../services/items-api-slice';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { setData } from '../../store/reducers/ItemsSlice';
import './Details.css';

const Details = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    handleData();
  }, [dispatch]);

  const handleData = () => {
    dispatch(setData([]));
  };
  const { data, isLoading, isError } = useItemDetailQuery(Number(id));

  return (
    <div className="details">
      {isLoading && !isError ? (
        <Loading />
      ) : data ? (
        <>
          <Link to=".." className="close-btn" data-testid="close-btn"></Link>
          <article className="details-card" data-testid="item-card">
            <h2 data-testid="name">{data.name}</h2>
            <p data-testid="eye_color">
              <strong>Eye color: </strong>
              {data.eye_color}
            </p>
            <p data-testid="gender">
              <strong>Gender: </strong>
              {data.gender}
            </p>
            <p data-testid="birth_year">
              <strong>Birth year: </strong>
              {data.birth_year}
            </p>
          </article>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Details;
