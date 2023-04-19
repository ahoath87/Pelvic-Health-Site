import './App.css';
import { React, useEffect, useState } from 'react';

import {
  Home,
  Login,
  Register,
  Nav,
  Quiz,
  SecondQuiz,
  SmallNav,
  Info,
  Footer,
  BlogHome,
} from './components/index';
import { Route, Routes } from 'react-router-dom';
import { fetchMe } from './api/auth';
import InfoBox from './components/infobox';

function App() {
  // const [backendUser, setBackendUser] = useState([{}]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div className='App'>
      <SmallNav />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Nav />
              <Home />
              <InfoBox />
              <Info />
              <BlogHome />
              <Footer />
            </div>
          }
        ></Route>
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
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/secondquiz' element={<SecondQuiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
