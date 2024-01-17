import React from 'react';
import "./Coin.css";

function Coin({imgSrc, side}) {

  return (
    <div className='Coin'>
      <img src={imgSrc} alt={side} />
    </div>
  );
}

export default Coin;