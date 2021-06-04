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
        <p>
          I was born and raised in Nashville, and like many of my fellow Music  City natives, I have been playing music almost my entire life. I love music and have dedicated a lot of my time to mastering the bass guitar, however, I never pursued a career in music. Instead, I traveled down a different path toward film and video production, but after realizing the importance of steady, stable work, I decided to go to law school.
        </p>
        <p>
          After spending several years as an attorney, I felt that the creative flame that burned within me had died down and needed to be rekindled. Then, I discovered the world of web development, which seemed to demonstrate a delicate balance between structure and creativity that piqued my interest. I jumped into the part-time full-stack web development program at Nashville Software School and never looked back.
        </p>
      </div>
    </div>
  );
}
