// src/routes/auth/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

function Login({ username, password, setUsername, setPassword, setIsLoggedIn }) {
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Aquí harías la llamada a la API para realizar el login.
      // const response = await axios.post('/api/auth/login', { username, password });
      // Aquí manejarías la respuesta de la API y guardarías el token en localStorage.
      // localStorage.setItem('accessToken', response.data.accessToken);
      setIsLoggedIn(true); // Actualizas el estado de isLoggedIn a true.
      navigate('/dashboard'); // Rediriges al usuario al Dashboard.
    } catch (error) {
      console.error('Login error:', error);
      // Manejar el error de login aquí, por ejemplo, mostrar un mensaje de error en la interfaz.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {/* Título y campos de entrada como en tu código */}
      {/* ... */}
      <div className="button-wrapper">
        <button type="submit" className="button">🔑 Login</button>
      </div>
    </form>
  );
}

export default Login;
