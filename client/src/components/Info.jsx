import React from 'react';
import { Link } from 'react-router-dom';
import './css/info.css';

const Info = () => {
  return (
    <div className='info-container'>
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
      <div className='facts'>
        Not Sure if this is speaking to ya.... keep scrolling
      </div>
      <div className='factlist'>
        <div>FACT 1</div>
        <div>FACT 2</div>
        <div>FACT 3</div>
        <div>FACT 4</div>
        <div>FACT 5</div>
      </div>
    </div>
  );
};

export default Info;
