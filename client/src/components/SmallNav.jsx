import React from 'react';
import { Link } from 'react-router-dom';
import './css/smallNav.css';

const SmallNav = () => {
  // const logout = () => {
  //   localStorage.clear();
  //   window.location.href = '/';
  // };

  return (
    <div id='smallnavbar'>
      <div id='links'>
        <div>
          <Link id='smallnav-link' to='/'>
            Home
          </Link>
        </div>
        <div>
          <Link id='smallnav-link'>About</Link>
        </div>
        <div>
          <Link id='smallnav-link'>Blog</Link>
        </div>
        <div>
          <Link id='smallnav-link' to='/'>
            Resources
          </Link>
        </div>
        <div>
          <Link id='smallnav-link'>Contact</Link>
        </div>
        <div>
          <Link id='smallnav-link' to='/login'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
