import React from 'react';
import PropTypes from 'prop-types';
import ProjectsForm from '../../components/ProjectsForm';

function AddProject({ admin, setProjects }) {
  return (
    <div>
      <ProjectsForm
        formTitle='Add Project'
        setProjects={setProjects}
        admin={admin}
      />
    </div>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func,
  admin: PropTypes.any
};

export default AddProject;
