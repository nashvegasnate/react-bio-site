import React from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardSubtitle,
  CardLink
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProjectsCard({
  name,
  gitHubLink,
  desc,
  url,
  screenshot,
  loomLink,
  techUsed
}) {
  const ProjectsItem = styled.div`
    width: 350px;
    height: auto;
    margin: 15px;
    box-shadow: 50px;
  `;

  return (
    <ProjectsItem>
      <Card body id="projectsCard">
        <CardImg id="screenshot" height="200px" src={screenshot}></CardImg>
        <CardSubtitle tag="h3" className="text-center mt-1 mb-3">{name}</CardSubtitle>
        <CardSubtitle tag="h5" className="text-center mt-1 mb-3">{desc}</CardSubtitle>
        <CardSubtitle tag="h5" className="text-center mt-1 mb-3">{techUsed}</CardSubtitle>
        <CardLink href={url}>See the App</CardLink>
        <hr></hr>
        <CardLink href={loomLink}>See Loom Video</CardLink>
        <hr></hr>
        <CardLink href={gitHubLink}>Link to GitHub</CardLink>
      </Card>
    </ProjectsItem>
  );
}

ProjectsCard.propTypes = {
  firebaseKey: PropTypes.string,
  gitHubLink: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  loomLink: PropTypes.string,
  techUsed: PropTypes.string,
  screenshot: PropTypes.string
};

export default ProjectsCard;
