import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../navigation/Header';
import SideBar from '../navigation/SideBar';
// Importa los componentes de tus páginas si vas a usar Routes
// import HomePage from 'ruta-a-HomePage';
// import Favorites from 'ruta-a-Favorites';
// import WatchLater from 'ruta-a-WatchLater';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      {/* Si tienes rutas que mostrar en el dashboard, descomenta y utiliza este bloque
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      */}
    </div>
  );
}

export default Dashboard;

