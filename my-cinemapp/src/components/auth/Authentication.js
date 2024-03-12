// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const navigate = useNavigate(); // Inicializa navigate
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authRoute = _switch ? 'http://localhost:8000/api/auth/login/' : 'http://localhost:8000/api/auth/register';
    try {
      const response = await axios.post(authRoute, { username, password });
      localStorage.setItem('accessToken', response.data.accessToken); // Asegúrate de que 'accessToken' es la clave correcta
      setUserUsername(username);
      setIsLoggedIn(true);
      navigate('/dashboard/dashboard'); // Añade la redirección al Dashboard aquí
    } catch (error) {
      console.error('Authentication error:', error);
      // Aquí puedes mostrar un mensaje de error en la UI si es necesario
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
          handleSubmit={handleSubmit} // Asegúrate de que tu componente Login llame a esta función cuando el formulario sea enviado
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSubmit={handleSubmit} // Lo mismo aplica para el componente Register
        />
      )}
    </div>
  );
}

export default Authentication;
