import React from 'react';
import './Item.css';

class Item extends React.Component {
  render() {
    return (
      <>
        <article className="item-card">
          {data ? (
            data.map((e) => {
              return (
                <>
                  <img src={e.url} alt={'Photo of ' + e.name} />
                  <h1>{e.name}</h1>
                </>
              );
            })
          ) : (
            <div>error fetching</div>
          )}
        </article>
      </>
    );
  }
}

export default Item;
