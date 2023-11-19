import { NavLink, useParams } from 'react-router-dom';
import { IMAGE_URL } from '../../models/interfaces/constants';
import { ItemIterface } from '../../models/interfaces/interfaces';
import './Item.css';

export const Item = (props: ItemIterface) => {
  const { name, url, eye_color, birth_year, gender } = props;

  const heroId = url.split('/');
  heroId.pop();
  const heroIdNum = heroId[heroId.length - 1];
  let { page } = useParams();
  page = page || '1';

  return (
    <article className="item-card" data-testid="item-card">
      <NavLink to={`/page/${page}/details/${heroIdNum}`}>
        <button className="article-btn" data-testid="details-btn">
          Details
        </button>
      </NavLink>
      <img
        src={`${IMAGE_URL}/${heroIdNum}.jpg`}
        alt={'Photo of ' + name}
        className="item-image"
      />
      <h2 data-testid="name">{name}</h2>
      <p data-testid="eye_color">
        <strong>Eye color: </strong>
        {eye_color}
      </p>
      <p data-testid="gender">
        <strong>Gender: </strong>
        {gender}
      </p>
      <p data-testid="birth_year">
        <strong>Birth year: </strong>
        {birth_year}
      </p>
    </article>
  );
};
