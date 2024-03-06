import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity'; // Asegúrate de ajustar la ruta de importación según tu estructura de proyecto

function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true); // Este estado se declara pero no se usa en el ejemplo proporcionado
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
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
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('favorites')}>Favorites</li>
        <li onClick={() => setPage('watchlater')}>Watch Later</li>
      </ul>
      {showActivities && (
        <ul>
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activityDescription={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SideBar;
