import React from 'react';
import './Item.css';

type Props = {
  name: string;
  url: string;
  gender: string;
  eye_color?: string;
  birth_year: string;
};
class Item extends React.Component<Props> {
  imageUrl = 'https://starwars-visualguide.com/assets/img/characters';
  render() {
    const heroId = this.props.url.split('/');
    return (
      <article className="item-card">
        <img
          src={`${this.imageUrl}/${heroId[heroId.length - 2]}.jpg`}
          alt={'Photo of ' + this.props.name}
          className="item-image"
        />
        <h2>{this.props.name}</h2>
        <h3>{this.props.eye_color}</h3>
        <h3>{this.props.gender}</h3>
        <p>{this.props.birth_year}</p>
      </article>
    );
  }
}

export default Item;
