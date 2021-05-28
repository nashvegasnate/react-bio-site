import React from 'react';
import PropTypes from 'prop-types';
import ProjectsForm from '../../components/ProjectsForm';
import EditProjectsCard from '../../components/EditProjectsCard';

function EditProjects({ projects, setProjects }) {
  return (
    <>
    <div>
      <ProjectsForm
        formTitle='Add Project'
        setProjects={setProjects}
      />
    </div>
    <div className="card-container">
      {projects?.map((projectInfo) => (
        <EditProjectsCard
        key={projectInfo.firebaseKey}
        project={projectInfo}
        setProjects={setProjects}
        />
      ))}
    </div>
    </>
  );
}

EditProjects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default EditProjects;
