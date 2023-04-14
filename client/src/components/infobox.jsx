import React from 'react';
import { Link } from 'react-router-dom';
import './css/info.css';

const InfoBox = () => {
  return (
    <div className='infobox-container'>
      <div className='quizboxlink'>
        <div>
          Take our symptom quiz to gain access to suggested treatments and
          diagnosis
        </div>
        <div>
          <Link className='clickhere'>
            <p id='clickhere'>Click Here!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
