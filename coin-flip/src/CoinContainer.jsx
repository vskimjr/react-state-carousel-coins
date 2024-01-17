import React, { useState } from 'react';
import Coin from "./Coin";
import "./CoinContainer.css";

import { choice } from "./choice";
import coins from "./coins";


function CoinContainer({ props = coins }) {
  const [coin, setCoin] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  function handleClick(evt) {
    const newCoin = choice(props);
    setCoin(newCoin);

    if (newCoin.side === "heads") {
      setHeadsCount((oldHeadsCount) => oldHeadsCount + 1);
    } else {
      setTailsCount((oldTailsCount) => oldTailsCount + 1);
    }
  };

  let currentCoin = coin !== null ? (
    <Coin imgSrc={coin.imgSrc} side={coin.side} />
  ) : null;

  return (
    <div className="CoinContainer">
      <h1>Flip a coin!</h1>
      {currentCoin}
      <button onClick={handleClick}>Flip me!</button>
      <p>
        Out of {headsCount + tailsCount} flips, there have been {headsCount} heads and {tailsCount} tails.
      </p>
    </div>
  );
}

export default CoinContainer;