import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

function Login({ username, password, setUsername, setPassword }) {
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.post('http://localhost:8000/api/auth/login', {
        username: username,
        password: password,
      })
      
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        setUsername(username);
        navigate('/dashboard'); // Redirige al usuario al Dashboard aquí dentro del then para asegurar que se redirige después de loguearse exitosamente.
      })
      .catch(error => { // Corrección de `.cath` a `.catch`
        console.error(error);
      })
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h3 className="auth-title">Login to your account</h3>
      <div className="input-wrapper">
        <label htmlFor="username">🧸 Username:</label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">🗝️ Password:</label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-wrapper">
        <button type="submit" className="button">🔑 Login</button>
      </div>
    </form>
  );
}

export default Login;
