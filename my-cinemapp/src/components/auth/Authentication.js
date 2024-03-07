// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true); // true para Login, false para Register
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const authRoute = _switch ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await axios.post(authRoute, { username, password });
      localStorage.setItem('accessToken', response.data.accessToken); // Almacena el token en localStorage
      setUserUsername(username); // Actualiza el estado con el nombre de usuario
      setIsLoggedIn(true); // Establece isLoggedIn como true
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setSwitch(true)}>Sign In</button>
      <button onClick={() => setSwitch(false)}>Sign Up</button>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit} // Pasas handleSubmit como prop a Login
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit} // Pasas handleSubmit como prop a Register
        />
      )}
    </div>
  );
}

export default Authentication;
