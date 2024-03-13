import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/dashboard';
import Authentication from './components/auth/Authentication';
import './App.css';
import './components/components.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/validate', {}, { // Asegúrate de que la ruta '/api/auth/validate' sea la correcta para validar el token
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        setIsLoggedIn(true);
        // La línea siguiente se ha eliminado ya que `userUsername` no se utiliza en el componente
      }).catch(error => {
        console.log(error);
      });
    }
  }, []);

  return (
    isLoggedIn ? <Dashboard /> : <Authentication />
  );
}

export default App;
