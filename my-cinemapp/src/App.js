import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/Dashboard';
import Authentication from './components/auth/Authentication';
import './App.css';
import './components/components.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [UserName, setUsername] = useState('');
  
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setAccessToken(storedToken)
      console.log(accessToken)
      axios.post('http://localhost:8000/api/auth/', {}, { // Asegúrate de que la ruta '/api/auth/validate' sea la correcta para validar el token
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      }).then(response => {
        setIsLoggedIn(true);
        setUsername(response.data.username)
      }).catch(error => {
        console.log(error);
      });
    }
  }, []);

  return (
    isLoggedIn ? <Dashboard /> : <Authentication setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;
