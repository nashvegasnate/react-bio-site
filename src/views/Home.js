import React from 'react';
import Charleston from '../assets/Charleston.png';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='homeTitle'>
        <h2>Nathan Keith</h2>
        <h3>Full-Stack Software Engineer</h3>
      </div>
      <div className='home-pic-container'>
      <img src={Charleston} className='home-pic'></img>
      </div>
    </div>
  );
}
