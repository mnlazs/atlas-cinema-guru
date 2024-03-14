import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

function SideBar() {
  const [selected, setSelected] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowActivities(true);
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activity', {
          headers: {
            'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoibWFudWVsIiwiaWF0IjoxNzEwNDM0Mzc4LCJleHAiOjE3MTA1MjA3Nzh9.dHC5k7UCNQa3ruYjbJZy1yvnf2gDHuX-9uxauDj1p4s`
          }
        }); // Esta llave cierra la configuración del objeto axios
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
    <div className={`side-bar ${expanded ? 'expanded' : ''}`}
         onMouseEnter={() => setExpanded(true)} 
         onMouseLeave={() => setExpanded(false)}>
      <ul>
        <li className={selected === 'home' ? 'selected' : ''} onClick={() => setPage('home')}>
          <i className='fas fa-home'></i><span className={expanded ? 'show' : ''}>Home</span>
        </li>
        <li className={selected === 'favorites' ? 'selected' : ''} onClick={() => setPage('favorites')}>
          <i className="fas fa-star"></i><span className={expanded ? 'show' : ''}>Favorites</span>
        </li>
        <li className={selected === 'watchlater' ? 'selected' : ''} onClick={() => setPage('watchlater')}>
          <i className="fas fa-clock"></i><span className={expanded ? 'show' : ''}>Watch Later</span>
        </li>
      </ul>
      {showActivities && (
        <ul className="activity-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activityDescription={activity.description} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideBar;
