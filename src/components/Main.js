import React from 'react';
import Cards from './Cards';

function Main() {
  const pokemonArr = [];
  const dataFetch = async () => {
    for (let i = 1; i <= 12; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      pokemonArr.push(data);
    }
  };
  dataFetch();
  return (
    <div className="container">
      <div className="score_wrapper">
        <div className="current_score">Current score: 0</div>
        <div className="best_score">Best score: 0</div>
      </div>
      <Cards data={pokemonArr} />
    </div>
  );
}

export default Main;
