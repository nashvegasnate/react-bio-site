import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/editProjects">EDIT PROJECTS</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md" justifycontent="space-around">
        <Link to="/home">Nathan Keith</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {admin && authenticated()}
              {admin !== null && (
                <NavItem>
                  {admin ? (
                  <Button color="warning" onClick={signOutUser}>SIGN OUT
                  </Button>
                  ) : (
                  <Button color="info" onClick={signInUser}>Admin?
                  </Button>
                  )}
                  </NavItem>
              )}
          </Nav>
         </Collapse>
          <NavItem>
                    <Link className="nav-link" to="/about">ABOUT</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/projects">PROJECTS</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/tech">TECHNOLOGIES</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                  </NavItem>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
