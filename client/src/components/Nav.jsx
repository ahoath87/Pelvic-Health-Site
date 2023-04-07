import React from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Nav = () => {
  // const logout = () => {
  //   localStorage.clear();
  //   window.location.href = '/';
  // };

  return (
    <div id='navbar'>
      <div id='links'>
        <div id='quiz-reg-butt'>
          <Link to='/register'>
            <button className='quiz-reg-butt'>Sign Up Here!</button>
          </Link>
        </div>
        <div>
          <Link to='/quiz'>
            <button className='quiz-nav-butt'>Symptom Quiz!</button>
          </Link>
        </div>
      </div>
      <div>LOGO HERE</div>
    </div>
  );
};

export default Nav;
