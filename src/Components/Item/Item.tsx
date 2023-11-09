import './Item.css';
import { NavLink } from 'react-router-dom';
import { IMAGE_URL } from 'interfaces/constants';
import { ItemIterface } from 'interfaces/interfaces';

export const Item = (props: ItemIterface) => {
  const { name, url, eye_color, birth_year, gender } = props;

  const heroId = url.split('/');
  heroId.pop();
  const heroIdNum = heroId[heroId.length - 1];

  return (
    <article className="item-card">
      <NavLink to={`/list-item/details/${heroIdNum}`}>
        <button className="article-btn">Details</button>
      </NavLink>
      <img
        src={`${IMAGE_URL}/${heroIdNum}.jpg`}
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
