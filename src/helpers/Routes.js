import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
// import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Projects from '../views/Projects';
import About from '../views/About';
import Tech from '../views/Tech';
import Contact from '../views/Contact';
import EditProjects from '../views/admin/EditProjects';
// import Players from '../views/Players';
// import SinglePlayer from '../views/SinglePlayer';
// import NotFound from '../views/NotFound';

const AuthedRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (burrito) => (admin
    ? (<Component {...burrito} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: burrito.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AuthedRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};
function Routes({ projects, setProjects, admin }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={Home} />
        <Route
          exact
          path='/about'
          component={About}
        />
        <Route
          exact
          path='/projects'
          component={() => <Projects projects={projects} setProjects={setProjects} />}
        />
        <Route
          exact
          path='/tech'
          component={Tech}
        />
         <Route
          exact
          path='/contact'
          component={Contact}
        />
        <AuthedRoute
          exact
          path='/editProjects'
          component={() => (
            <EditProjects projects={projects} setProjects={setProjects} />
          )}
            admin={admin}
        />
        <Route path='*' component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  setProjects: PropTypes.func,
  projects: PropTypes.array
};

export default Routes;
