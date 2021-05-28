import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardLink
} from 'reactstrap';
import { deleteProject } from '../helpers/data/ProjectsData';
import ProjectsForm from './ProjectsForm';

const EditProjectsCard = ({
  project,
  setProjects
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(project.firebaseKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card>
      <CardTitle tag="h5">{project.name}</CardTitle>
      <CardImg src={project.screenshot} />
      <CardText>Description: {project.desc}</CardText>
      <CardLink href={project.gitHubLink}>GitHub Link: </CardLink>
      <CardLink href={project.loomLink}>Loom Video Link: </CardLink>
      <CardLink href={project.url}>Url: </CardLink>
      <CardText>Tech Used: {project.techUsed}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Project</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Project'}
      </Button>
      {
        editing && (<ProjectsForm
          formTitle='Edit Project'
          setProjects={setProjects}
          firebaseKey={project.firebaseKey}
          name={project.name}
          screenshot={project.screenshot}
          desc={project.desc}
          gitHubLink={project.gitHubLink}
          loomLink={project.loomLink}
          url={project.url}
          techUsed={project.techUsed}
        />
        )}
    </Card>
  );
};

EditProjectsCard.propTypes = {
  project: PropTypes.object,
  setProjects: PropTypes.func,
  screenshot: PropTypes.string,
  desc: PropTypes.string,
  gitHubLink: PropTypes.string,
  loomLink: PropTypes.string,
  url: PropTypes.string,
  techUsed: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default EditProjectsCard;
