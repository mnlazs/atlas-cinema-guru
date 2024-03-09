// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authRoute = _switch ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await axios.post(authRoute, { username, password });
      localStorage.setItem('accessToken', response.data.accessToken);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="switch-buttons">
      <button onClick={() => setSwitch(true)} className={_switch ? "header-button active" : "header-button"}>Sign In</button>
      <button onClick={() => setSwitch(false)} className={!_switch ? "header-button active" : "header-button"}>Sign Up</button>
    </div>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Authentication;
