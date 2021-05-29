import React from 'react';
import Charleston from '../assets/Charleston.png';
// import hexPattern from '../assets/hexPattern.png';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='headTitle'>
        <h2>Nathan Keith</h2>
        <h3>Full-Stack Software Engineer Journeyman</h3>
      </div>
      <div className='my-pic-container'>
      <img src={Charleston} className='home-pic'></img>
      </div>
    </div>
  );
}
