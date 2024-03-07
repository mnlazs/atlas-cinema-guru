import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

function SideBar() {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activity');
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  const setPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('favorites')}>Favorites</li>
        <li onClick={() => setPage('watchlater')}>Watch Later</li>
      </ul>
      {/* Considera implementar un mecanismo para cambiar showActivities si quieres mostrar esta lista */}
      {/* {showActivities && (
        <ul>
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activityDescription={activity} />
          ))}
        </ul>
      )} */}
    </nav>
  );
}

export default SideBar;
