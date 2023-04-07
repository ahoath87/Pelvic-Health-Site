import './css/Login.css';
import { React, useState } from 'react';
import { loginUser } from '../api/auth';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form
        onSubmit={async (e) => {
          if (password.length > 5 && username.length > 5) {
            try {
              e.preventDefault();
              //changed the response to token as it was changed form the auth.js
              const token = await loginUser(username, password);
              // setting token into global storage so it can be pulled throughout the app
              setToken(token);
              //get this setToken function and update the state for the refined token
              localStorage.setItem('token', token);
              //go back and make the the local to be the storage
              console.log('this is token in login', token);
              setUsername('');
              setPassword('');
            } catch (error) {
              console.error(error);
            }
          }
        }}
      >
        <h2>Login</h2>
        {/* <h1>Welcome {user?.username}!</h1> */}
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
        <button id='submitten' type='submit'>
          submit
        </button>
      </form>
    </div>
  );
};
export default Login;
