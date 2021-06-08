import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
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
      <Navbar color="light" bg="light" expand="lg">
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavbarBrand href="/">NATHAN KEITH</NavbarBrand>
          </Nav>
        <a
            className="btn btn-floating"
            href="mailto:nashvegasnate@gmail.com"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a
            className="btn btn-floating"
            href="https://www.linkedin.com/in/nathan-keith-b20123210/"
            style={{ display: 'table-cell' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            className="btn btn-floating"
            href="https://github.com/nashvegasnate"
            style={{ display: 'table-cell' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          {/* <Link to="/">NATHAN KEITH</Link> */}
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
