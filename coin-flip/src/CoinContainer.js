// App > CoinContainer > Coin

// inside coincontainer would be h1 let's flip a coin and the state details for number flipped and heads vs tails amount

// Coin
// -> just the coin randomizer
// - keeps track of heads or tails?

import React, { useState } from 'react';
import Coin from "./Coin";
import { choice } from "./choice";
import { coins } from "./coins";

// we need to check if there is a current coin, if it is null, then we set coin as something and then

function CoinContainer({ coins }) {
  const [coin, setCoin] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  function handleClick(evt) {
    const newCoin = choice(coins);
    setCoin(newCoin);

    if (newCoin.side === "head") {
      setHeadsCount((headsCount) => headsCount + 1);
    } else {
      setTailsCount((tailsCount) => tailsCount + 1);
    }
  };

  let currentCoin = coin !== null ? <Coin imgSrc={coin.imgSrc} side={coin.side} /> : null;

  return (
    <div className="CoinContainer">
      <h1>Flip a coin!</h1>
      {currentCoin}
      <button onClick={handleClick}>Flip me!</button>
      <p>
        Out of {headsCount + tailsCount} flips, there have been {headsCount}
        heads and {tailsCount} tails.
      </p>
    </div>
  );
}

export default CoinContainer;