// src/components/navigation/Header.js
import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    // Agrega aquí la redirección si es necesario
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        Cinema Guru
      </div>
      <div className="nav-user">
        <img src="https://picsum.photos/35/35" alt="Avatar" /> {/* Ajusta el tamaño según sea necesario */}
        <p>Welcome, Manuel{userUsername} ❤️ </p>
        <span onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>  Logout
        </span>
      </div>
    </nav>
  );
};

export default Header;

