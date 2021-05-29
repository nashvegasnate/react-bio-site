import React from 'react';
import DanishChair from '../assets/DanishChair.png';
// import hexPattern from '../assets/hexPattern.png';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-pic-container'>
      <img src={DanishChair} className='about-pic'></img>
      </div>
      <div className='aboutTitle'>
        <h2>Who I Am</h2>
        <p>Here is where information about me will go. Do you know me? Do I know you? Do I know me?</p>
        <p>So many questions, but so little time to input any meaningful </p>
        <p>information into this paragraph at the moment.</p>
      </div>
    </div>
  );
}
