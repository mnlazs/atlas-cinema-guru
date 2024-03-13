import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import SideBar from '../navigation/SideBar';
import Header from '../navigation/Header';
// import Authentication from '../auth/Authentication'; // Comentado si no se usa

// Importa los componentes de tus páginas
// import HomePage from 'ruta-a-HomePage';
// import Favorites from 'ruta-a-Favorites';
// import WatchLater from 'ruta-a-WatchLater';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-container">
      <Header 
      userUsername={userUsername} 
      setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      
    </div>
  );
}

export default Dashboard;
