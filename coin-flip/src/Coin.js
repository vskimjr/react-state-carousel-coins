import React from 'react';
import "./Coin.css";

function Coin(props) {

  return (
    <div className='Coin'>
      <img src={props.imgSrc} alt={props.imgSide} />
    </div>
  );
}

export default Coin;