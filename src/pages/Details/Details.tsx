import Link from 'next/link';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useItemDetailQuery } from '../../services/items-api-slice';
import { useAppDispatch } from '../../hooks/redux';
import { useEffect } from 'react';
import { setData } from '@/_store/reducers/ItemsSlice';
import './Details.css';
import styles from './Details.module.css';

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
    <div className={styles.details}>
      {isLoading && !isError ? (
        <Loading />
      ) : data ? (
        <>
          <Link href=".." className={styles.closeBtn} data-testid="closeBtn" />
          <article className={styles.detailsCard} data-testid="item-card">
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
