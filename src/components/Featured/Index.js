import React from 'react'

import Carrousel from './Carrousel';
import CountDown from './Countdown';

const Featured = () => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>
      <CountDown />
    </div>
  )
}
export default Featured;
