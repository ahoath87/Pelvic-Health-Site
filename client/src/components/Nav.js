import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ user }) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <header id='navbar'>
      <div id='links'>
        <div id='Home-link'>
          <Link to='/'>Home</Link>
        </div>
        <div id='Register-link'>
          <Link to='/register'>Register</Link>
        </div>
        <div id='Login-link'>
          <Link to='/login'>Login</Link>
        </div>
        <div id='routines-link'>
          {/* <Link to="/routines">Routines</Link> */}
        </div>
        <div id='myroutines-link'>
          {/* <Link to="/myroutines">My Routines</Link> */}
        </div>
        <div id='activities-link'>
          {/* <Link to="/activities">Activities</Link> */}
        </div>
        <button id='log-out' onClick={logout}>
          Log Out
        </button>
        <button>Take the Test!</button>
        <button>Register Here!</button>
      </div>
    </header>
  );
};

export default Nav;
