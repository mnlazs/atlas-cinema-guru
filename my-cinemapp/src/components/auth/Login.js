import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

function Login({ username, password, setUsername, setPassword, setIsLoggedIn }) {
  const [_switch, set_switch] = useState(true);
  let navigate = useNavigate();
  console.log(setIsLoggedIn); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
    //  if (_switch) {
        axios.post('http://localhost:8000/api/auth/login', {

        username: username,
        password: password,
        })
        .then(response => {
          localStorage.setItem('accessToken', response.data.accessToken);
          setUsername(username);
          console.log(typeof setIsLoggedIn)
          setIsLoggedIn(true);
        })
        .cath(error => {
          console.error(error);
        })
     // }
      // Aquí harías la llamada a la API para realizar el login.
      //const response = await axios.post('http://localhost:8000/api/auth/login/', { username, password });
      // Aquí manejarías la respuesta de la API y guardarías el token en localStorage.
      //localStorage.setItem('accessToken', response.data.accessToken);
     // setIsLoggedIn(true); // I REMOVED HERE IN ORDER TO DELETE THE ERROR = Login.js:19 Login error: TypeError: setIsLoggedIn is not a function
      navigate('/dashboard'); // Rediriges al usuario al Dashboard.
    } catch (error) {
      console.error('Login error:', error);
      // Manejar el error de login aquí, por ejemplo, mostrar un mensaje de error en la interfaz.
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
