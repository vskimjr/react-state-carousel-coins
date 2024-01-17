// App > CoinContainer > Coin

// inside coincontainer would be h1 let's flip a coin and the state details for number flipped and heads vs tails amount

// Coin
// -> just the coin randomizer
// - keeps track of heads or tails?

import React, { useState } from 'react';
import Coin from "./Coin";

function CoinContainer() {
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);




  return (
    <div className="CoinContainer">
      <h1>Flip a coin!</h1>
      <Coin props={props} />
      <button onClick={ }>Flip me!</button>
      <p>
        Out of {headsCount + tailsCount} flips, there have been {headsCount} heads and {tailsCount} tails.
      </p>
    </div>
  );
}

export default CoinContainer;