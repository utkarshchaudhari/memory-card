import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function Main() {
  const [data, setData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedCard, setClickedCard] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const pokemonArr = [];
    for (let i = 1; i <= 12; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      pokemonArr.push(data);
    }
    setData(pokemonArr);
  };

  function updateScore(e) {
    const id = e.currentTarget.dataset.id;

    if (clickedCard.includes(id)) {
      setClickedCard([]);
      setCurrentScore(0);
    } else {
      setClickedCard([...clickedCard, id]);
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <div className="container">
      <div className="score_wrapper">
        <div className="current_score">Current score: {currentScore}</div>
        <div className="best_score">Best score: 0</div>
      </div>
      <Cards data={data} updateScore={updateScore} />
    </div>
  );
}

export default Main;
