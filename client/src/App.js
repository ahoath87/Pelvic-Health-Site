import './App.css';
import { React, useEffect, useState } from 'react';
import background from './assets/images/background.jpg';
import { Home, Login, Register, Nav } from './components/index';
import { Route, Routes } from 'react-router-dom';
import { fetchMe } from './api/auth';

function App() {
  // const [backendUser, setBackendUser] = useState([{}]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendUser(data);
  //     });
  // }, []);

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);

      console.log('this is data', data);
      console.log('this is token', token);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  // console.log("this is backenduser", backendUser);
  return (
    <div className='App' style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Nav></Nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/login'
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path='/register'
          element={<Register setToken={setToken} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
