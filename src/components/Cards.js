import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

function Cards(props) {
  const data = props.data;
  return (
    <div className="cards_wrapper">
      {data
        .sort((a, b) => 0.5 - Math.random())
        .map((card) => {
          return (
            <Card card={card} key={uuidv4()} updateScore={props.updateScore} />
          );
        })}
    </div>
  );
}

export default Cards;
