import './css/Register.css';
import signupimg from '../assets/images/signupimg.png';
import { Link } from 'react-router-dom';
import { React, useState } from 'react';

import { registerUser } from '../api/auth';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');

  return (
    <div className='reg-container'>
      <div className='regimg-container'>
        <img src={signupimg} alt='women collage'></img>
      </div>
      <div className='regform-container'>
        <form
          id='regform'
          onSubmit={async (e) => {
            if (password.length > 5 && username.length > 5) {
              try {
                e.preventDefault();
                //changed the response to token as it was changed form the auth.js
                const token = await registerUser(
                  username,
                  password,
                  name,
                  email
                );
                // setting token into global storage so it can be pulled throughout the app
                setToken(token);
                //get this setToken function and update the state for the refined token
                localStorage.setItem('token', token);
                //go back and make the the local to be the storage
                console.log('this is token in register', token);
                setUsername('');
                setPassword('');
                setName('');
                //   setIsRegistered(true);
              } catch (error) {
                console.error(error);
              }
            }
          }}
        >
          <div className='regform-inputs'>
            <h2>Sign Up</h2>

            <input
              id='User'
              value={username}
              type='text'
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              id='Pass'
              value={password}
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              id='Pass'
              value={name}
              type='text'
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              id='reg_email'
              value={email}
              type='text'
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button id='submitten' type='submit'>
              <span>Lets Go!</span>
            </button>
            <p id='linkstologs'>
              Already a member?{' '}
              <Link to='/login' id='wordlink'>
                Head to Login!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
