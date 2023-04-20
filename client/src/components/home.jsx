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
        // width: 3000,
      }}
    >
      <div id='home-text'>
        <h1 id='big-title'> Welcome. </h1>

        <p id='describe'> A Free Pelvic Health Resource for Women</p>
        <div id='home-container'>
          <p id='site-description'>
            {' '}
            Did you know that 70-80% of the information Doctors need to make a
            diagnosis comes just from what you tell them!?{' '}
          </p>
          <p id='site-description'>
            Click{' '}
            <Link id='linkinsign' to='/register'>
              HERE
            </Link>{' '}
            to find out how this can help you{' '}
          </p>

          <div id='home-buttons'>
            <p id='site-description'>
              {' '}
              Register or Login to gain access to our diagnosis and treatments
              guided questionaire!{' '}
            </p>
          </div>
        </div>
        {/* <div className='button-container'>
          <div className='butt-div'>
            {' '}
            <Link id='home-reglink' to='/register'>
              Register{' '}
            </Link>
          </div>
          <div className='butt-div'>
            {' '}
            <Link id='home-loglink' to='/login'>
              Login
            </Link>
          </div>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
