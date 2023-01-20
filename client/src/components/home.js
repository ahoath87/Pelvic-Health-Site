import React from 'react';
// import { Link } from "react-router-dom";
import './Home.css';
import women from '../assets/images/women1.jpg';
// import { Link } from 'react';

const Home = () => {
  return (
    <div id='home'>
      <h1 id='big-title'> Virtual Pelvic Health Guide </h1>
      <div id='home-container'>
        <p id='site-description'>
          {' '}
          Did you know that conclusions that the Doc makes about your diagnosis
          and treatments on visit one are 80% due to your subjective description
          of complaints?!{' '}
        </p>
        <p>Click here to find out why this impacts you </p>
        <img src={women} alt='women'></img>
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
      Image by{' '}
      <a href='https://www.freepik.com/free-vector/white-abstract-background_11852424.htm#query=website%20background&position=1&from_view=keyword'>
        Freepik
      </a>
      Image by{' '}
      <a href='https://www.freepik.com/free-vector/hand-drawn-minimal-background_15273895.htm#page=8&query=website%20background&position=6&from_view=keyword'>
        Freepik
      </a>
    </div>
  );
};

export default Home;
