import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectsCard from '../components/ProjectsCard';

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

function Projects({ projects, setProjects }) {
  return (
    <>
      <ProjectsContainer className="card-container" id="projects-cards">
        {projects?.map((projectsInfo) => (
          <ProjectsCard
            key={projectsInfo.firebaseKey}
            firebaseKey={projectsInfo.firebaseKey}
            gitHubLink={projectsInfo.gitHubLink}
            name={projectsInfo.name}
            url={projectsInfo.url}
            desc={projectsInfo.desc}
            screenshot={projectsInfo.screenshot}
            loomLink={projectsInfo.loomLink}
            techUsed={projectsInfo.techUsed}
            setProjects={setProjects}
          />
        ))}
      </ProjectsContainer>
    </>
  );
}

Projects.propTypes = {
  name: PropTypes.string,
  gitHubLink: PropTypes.string,
  desc: PropTypes.string,
  screenshot: PropTypes.string,
  loomLink: PropTypes.string,
  techUsed: PropTypes.string,
  projects: PropTypes.array,
  url: PropTypes.string,
  setProjects: PropTypes.func
};

export default Projects;
