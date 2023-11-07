import './Item.css';
import { NavLink } from 'react-router-dom';
import { ItemIterface } from '../../interface/ItemInterface';
import { IMAGE_URL } from '../../interface/constants';

export const Item = (props: ItemIterface) => {
  const { name, url, eye_color, birth_year, gender } = props;

  const heroId = url.split('/');

  return (
    <article className="item-card">
      <NavLink to={`/list-item/details/${heroId[heroId.length - 2]}`}>
        {' '}
        <button className="article-btn">Details</button>{' '}
      </NavLink>
      <img
        src={`${IMAGE_URL}/${heroId[heroId.length - 2]}.jpg`}
        alt={'Photo of ' + name}
        className="item-image"
      />
      <h2>{name}</h2>
      <p>
        <strong>Eye color: </strong>
        {eye_color}
      </p>
      <p>
        <strong>Gender: </strong>
        {gender}
      </p>
      <p>
        <strong>Birth year: </strong>
        {birth_year}
      </p>
    </article>
  );
};
