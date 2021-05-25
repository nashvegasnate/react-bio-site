import React from 'react';
import PropTypes from 'prop-types';

export default function Home(admin) {
  return (
    <div>
      {admin ? <h2>Welcome Back, NK</h2> : <h2>Hello</h2>}
    </div>
  );
}

Home.propTypes = {
  admin: PropTypes.any
};
