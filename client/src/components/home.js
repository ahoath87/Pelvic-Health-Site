import React from 'react';
// import { Link } from "react-router-dom";
import women from '../assets/images/women.png';
import './home.css';

// import { Link } from 'react';

const Home = () => {
  return (
    <div
      id='home'
      style={{
        backgroundImage: `url(${women})`,
        backgroundRepeat: 'no-repeat',
        width: 3000,
      }}
    >
      <div id='home-text'>
        <h1 id='big-title'> Virtual Pelvic Health Guide </h1>
        <div id='home-container'>
          <p id='site-description'>
            {' '}
            Did you know that conclusions a Doc makes about your diagnosis and
            treatments on visit one are 80% due to your subjective description
            of complaints?!{' '}
          </p>
          <p>Click here to find out what this means for you </p>

          <div id='home-buttons'>
            <p>
              {' '}
              Register and Login to gain access to our diagnosis and treatments
              guided questionaire!{' '}
            </p>
          </div>
        </div>
        <button>
          {' '}
          Register
          {/* <Link to="/register">Register Here! </Link> */}
        </button>
        <button>
          {' '}
          Login
          {/* <Link to="/login">Login Here!</Link> */}
        </button>{' '}
      </div>
    </div>
  );
};

export default Home;
