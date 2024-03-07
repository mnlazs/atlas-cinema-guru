import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../navigation/Header';
import SideBar from '../../components/navigation/SideBar';

// import HomePage from 'ruta-a-HomePage';
// import Favorites from 'ruta-a-Favorites';
// import WatchLater from 'ruta-a-WatchLater';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <Routes>
          <Route path="/home" element={<div>HomePage Placeholder</div>} /> {/* Reemplaza el div con <HomePage /> cuando esté listo */}
          <Route path="/favorites" element={<div>Favorites Placeholder</div>} /> {/* Reemplaza el div con <Favorites /> cuando esté listo */}
          <Route path="/watchlater" element={<div>WatchLater Placeholder</div>} /> {/* Reemplaza el div con <WatchLater /> cuando esté listo */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
