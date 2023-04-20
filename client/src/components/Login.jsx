import './css/Login.css';
import { React, useState } from 'react';
import { loginUser } from '../api/auth';
import { Link } from 'react-router-dom';
import loginimg3 from '../assets/images/loginimg3.png';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-container'>
      <div className='logimg-container'>
        <div id='img-container'>
          <img src={loginimg3}></img>
        </div>
      </div>
      <div className='logform-container'>
        <form
          id='logform'
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
          <div className='loginform-stuff'>
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
              <span>Lets Go!</span>
            </button>
            <p id='linksignup'>
              Not a member yet?{' '}
              <Link to='/register' id='wordlink'>
                Sign up here!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
