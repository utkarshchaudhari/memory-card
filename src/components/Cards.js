import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function Cards(props) {
  const data = props.data;
  return (
    <div className="cards_wrapper">
      {data.map((card) => {
        return <Card card={card} key={uuidv4()} />;
      })}
    </div>
  );
}

export default Cards;
