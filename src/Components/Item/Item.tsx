import './Item.css';

type Props = {
  name: string;
  url: string;
  gender: string;
  eye_color?: string;
  birth_year: string;
};
const Item = (props: Props) => {
  const { name, url, eye_color, birth_year, gender } = props;
  const imageUrl = 'https://starwars-visualguide.com/assets/img/characters';

  const heroId = url.split('/');
  return (
    <article className="item-card">
      <img
        src={`${imageUrl}/${heroId[heroId.length - 2]}.jpg`}
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

export default Item;
