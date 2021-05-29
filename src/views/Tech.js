import React from 'react';
// import styled from 'styled-components';
import Firebase from '../assets/Firebase.png';

// const TechContainer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   margin-top: 5%;
//   padding-right: 2em;
//   padding-left: 2em;
//   align-items: center;
//   width: 100%;

// `;

export default function Tech() {
  return (
    <>
      <div className='techTitle'>TECHNOLOGIES</div>
        <div className='tech-container'>
          <div>
            <i className="fab fa-js fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-html5 fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-css3-alt fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-sass fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-github fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-git-square fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-react fa-5x"></i>
          </div>
          <div>
            <i className="fab fa-npm fa-5x"></i>
          </div>
          <div>
            <img src={Firebase} height="90em"></img>
          </div>
        </div>
    </>
  );
}
