/* src/routes/auth/Register.js */
import React from 'react';
import './auth.css';

function Register({ username, password, setUsername, setPassword }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registering:", username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {/* Título */}
      <h3 className="auth-title">Create a new account</h3>
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
        <button type="submit" className="button"> ✚ Sign Up </button>
      </div>
    </form>
  );
}

export default Register;
