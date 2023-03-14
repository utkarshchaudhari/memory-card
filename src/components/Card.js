import React from 'react';

function Card(props) {
  return (
    <div className="card_wrapper">
      <img
        className="card_img"
        src={props.card.sprites.other.dream_world.front_default}
        alt={props.card.name}
      />
      <p className="card_title">{props.card.name}</p>
    </div>
  );
}

export default Card;
