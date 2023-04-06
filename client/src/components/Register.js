import './Register.css';

import { React, useState } from 'react';
import { registerUser } from '../api/auth';

const Register = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>Welcome {name}!</h1>
      <form
        onSubmit={async (e) => {
          if (password.length > 5 && username.length > 5) {
            try {
              e.preventDefault();
              //changed the response to token as it was changed form the auth.js
              const token = await registerUser(username, password, name, email);
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
        <h2>Registration</h2>

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
          id='reg_name'
          value={name}
          type='text'
          placeholder='Name here'
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
          submit
        </button>
      </form>
    </div>
  );
};

export default Register;
