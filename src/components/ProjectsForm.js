import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/projectsData';

const ProjectsForm = ({
  formTitle,
  setProjects,
  name,
  url,
  gitHubLink,
  desc,
  screenshot,
  loomLink,
  techUsed,
  firebaseKey
}) => {
  const [project, setProject] = useState({
    name: name || '',
    url: url || '',
    gitHubLink: gitHubLink || '',
    desc: desc || '',
    screenshot: screenshot || '',
    loomLink: loomLink || '',
    techUsed: techUsed || '',
    firebaseKey: firebaseKey || null,
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      // make call to updateProject to update project and rerender the DOM
      updateProject(project).then(setProjects);
    } else {
      // addProject(project).then(setProjects);
      // history.push('/projects');
      addProject(project).then((response) => {
        setProject(response);
        history.push('/projects');
      });

      setProject({
        name: '',
        desc: '',
        url: '',
        gitHubLink: '',
        screenshot: '',
        loomLink: '',
        techUsed: '',
        firebaseKey: null,
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name='name'
            id='name'
            value={project.name}
            type='text'
            placeholder='Enter a Project Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Desc:</Label>
          <Input
            name='desc'
            id='desc'
            value={project.desc}
            type='text'
            placeholder='Enter a Project Description'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="url">Url:</Label>
          <Input
            name='url'
            id='url'
            value={project.url}
            type='text'
            placeholder='Enter a Project Url'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gitHubLink">GitHub Link:</Label>
          <Input
            name='gitHubLink'
            id='gitHubLink'
            value={project.gitHubLink}
            type='text'
            placeholder='Enter GitHub Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="screenshot">Screenshot:</Label>
          <Input
            name='screenshot'
            id='screenshot'
            value={project.screenshot}
            type='text'
            placeholder='Enter Screenshot Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="loomLink">Loom Link:</Label>
          <Input
            name='loomLink'
            id='loomLink'
            value={project.loomLink}
            type='text'
            placeholder='Enter Loom Link'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="techUsed">Tech Used:</Label>
          <Input
            name='techUsed'
            id='techUsed'
            value={project.techUsed}
            type='text'
            placeholder='Enter Tech Used'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProjectsForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  name: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  gitHubLink: PropTypes.string,
  screenshot: PropTypes.string,
  loomLink: PropTypes.string,
  techUsed: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default ProjectsForm;
