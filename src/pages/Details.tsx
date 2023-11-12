import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { fetchData } from 'services/api';
import { ItemIterface } from 'interfaces/interfaces';
import Loading from 'components/Loading/Loading';

const Details = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchedPeople(id);
  }, [id]);

  const [person, setPerson] = useState(null as ItemIterface | null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchedPeople(id: string | null = ''): Promise<void> {
    try {
      const data = await fetchData<ItemIterface>({ id: Number(id) || 1 });

      setPerson(data);
      setIsLoading(false);
    } catch (error) {
      throw new Error();
    }
  }
  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <article className="details-card">
          <NavLink to=".." className="close-btn"></NavLink>
          <h3>{person!.name}</h3>
          <p>
            <strong>Eye color: </strong>
            {person!.eye_color}
          </p>
          <p>
            <strong>Gender: </strong>
            {person!.gender}
          </p>
          <p>
            <strong>Birth year: </strong>
            {person!.birth_year}
          </p>
        </article>
      )}
    </div>
  );
};

export default Details;
