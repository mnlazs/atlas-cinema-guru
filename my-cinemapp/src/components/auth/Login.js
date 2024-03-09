/* src/routes/auth/login.js */
import React from 'react';
import './auth.css';

function Login({ username, password, setUsername, setPassword, setSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // La lógica de inicio de sesión va aquí
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {/* Título */}
      <h3 className="auth-title">Sign in with your account</h3>
      {/* Envoltorios de los campos de entrada */}
      <div className="input-wrapper">
        <label htmlFor="username"> 🧸 Username:</label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password"> 🗝️ Password:</label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-wrapper">
        <button type="submit" className="button"> 🔑 Login </button>
      </div>
    </form>
  );
}

export default Login;
