import React from 'react';
// import { Link } from 'react-router-dom';
import './css/info.css';

const Info = () => {
  return (
    <div className='info-container'>
      <div id='space'></div>
      <div className='facts'>
        Not Sure if this is speaking to ya.... keep scrolling
      </div>
      <div className='factlist'>
        <ul id='factlist'>
          <li>
            In a study of date from 25,000 women 32% reported pelvic floor
            disorders
          </li>
          <li>
            1 in 4 Women will experience urinary or stress incontnence in thiee
            lifetime
          </li>
          <li>60% of women avoid seeking care for pelvic floor complaints</li>
          <li>
            Postpartum women in the United States recieve one 15 minute
            postpartum visit
          </li>
          <li>The number one reason women don't seek care is embarrasment</li>
          <li>The second is an belief that it is NORMAL for women</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
