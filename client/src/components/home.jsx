import React from 'react';
import { Link } from 'react-router-dom';
import women from '../assets/images/women.png';
import './css/home.css';

// import { Link } from 'react';

const Home = () => {
  return (
    <div
      className='home'
      style={{
        backgroundImage: `url(${women})`,
        backgroundRepeat: 'no-repeat',
        width: 3000,
      }}
    >
      <div id='home-text'>
        <h1 id='big-title'> Welcome. </h1>
        <div id='home-container'>
          <p id='site-description'>
            {' '}
            Did you know that conclusions a Doc makes about your diagnosis and
            treatments on visit one are 80% due to your subjective description
            of complaints?!{' '}
          </p>
          <p id='site-description'>
            Click here to find out what this means for you{' '}
          </p>

          <div id='home-buttons'>
            <p id='site-description'>
              {' '}
              Register and Login to gain access to our diagnosis and treatments
              guided questionaire!{' '}
            </p>
          </div>
        </div>
        <div className='button-container'>
          <div className='butt-div'>
            {' '}
            <Link id='home-reglink' to='/register'>
              Register Here!{' '}
            </Link>
          </div>
          <div className='butt-div'>
            {' '}
            <Link id='home-loglink' to='/login'>
              Login Here!
            </Link>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Home;
