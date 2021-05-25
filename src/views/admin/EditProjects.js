import React from 'react';
import PropTypes from 'prop-types';

export default function EditProjects(admin) {
  return (
    <div>
      {admin ? <h1>EDIT PROJECTS PAGE</h1> : <h2>Nothing to see here</h2>}
    </div>
  );
}

EditProjects.propTypes = {
  admin: PropTypes.any
};
