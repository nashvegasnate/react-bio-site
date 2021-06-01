import React from 'react';

export default function Contact() {
  return (
    <>
      <div className='contactTitle'>CONTACT ME</div>
        <div className="contact-container">
          <a
            className="btn btn-floating"
            href="mailto:nashvegasnate@gmail.com"
          >
          <i className="fas fa-envelope fa-7x"></i>
            <h2>Email</h2>
          </a>
          <a
            className="btn btn-floating"
            href="https://www.linkedin.com/in/nathan-keith-b20123210/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="fab fa-linkedin fa-7x"></i>
          <h2>LinkedIn</h2>
          </a>
          <a
            className="btn btn-floating"
            href="https://github.com/nashvegasnate"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="fab fa-github fa-7x"></i>
          <h2>GitHub</h2>
          </a>
        </div>
    </>
  );
}
