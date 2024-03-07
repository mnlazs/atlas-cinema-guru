import React from 'react';
import './navigation.css';

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav-header">
      <img src="https://picsum.photos/100/100" alt="User Avatar" />
      <p>Welcome, {userUsername}</p>
      <span className="logout-span" onClick={logout}>
        Logout
      </span>
    </nav>
  );
}

export default Header;
