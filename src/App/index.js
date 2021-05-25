import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
// import { useHistory } from 'react-router-dom';

function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar admin={admin} />
      <Routes admin={admin} />
    </>
  );
}

export default App;
