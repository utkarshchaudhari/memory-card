import React from 'react';

function Card(props) {
  const name = props.card.name;
  const cName = name.charAt(0).toUpperCase().concat(name.slice(1));
  return (
    <div
      className="card_wrapper"
      onClick={props.updateScore}
      data-id={props.card.id}
    >
      <img
        className="card_img"
        src={props.card.sprites.other.dream_world.front_default}
        alt={cName}
      />
      <p className="card_title">{cName}</p>
    </div>
  );
}

export default Card;
