import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
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
    <div className="navBar">
      <Navbar color="none" light expand="lg" justifycontent="space-evenly">
        <Link to="/">NATHAN KEITH</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
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
          {admin && authenticated()}
              {admin !== null
              && <div>
                  <NavItem>
                    {admin ? (
                      <i className="fas fa-lock-open" onClick={signOutUser}></i>
                    ) : (
                      <i className="fas fa-lock" onClick={signInUser}></i>
                    )}
                  </NavItem>
                </div>}
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
