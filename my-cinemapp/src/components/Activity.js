import React from 'react';
import './components.css'; 

function Activity({ activityDescription }) {
  return (
    <li className="activity-item">
      <p className="activity-description">{activityDescription}</p>
    </li>
  );
}

export default Activity;
