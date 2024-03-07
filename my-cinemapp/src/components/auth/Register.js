import React from 'react';
import './auth.css';

function Register({ username, password, setUsername, setPassword }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registering:", username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default Register;
