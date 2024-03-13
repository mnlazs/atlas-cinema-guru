import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Authentication from './components/auth/Authentication';
// import Header from './components/navigation/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="dashboard-div">
       
        <Routes>
            <Route path='/home' element={<Authentication />} />
            <Route path='/*' element={<Navigate to= '/home' />} />
            <Route path='/' element={<App />} />

        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
