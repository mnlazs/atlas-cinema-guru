import React from 'react';
import './components.css'; 

function Activity({ activityDescription }) {
  return (
    <li>
      <p>{activityDescription}</p>
    </li>
  );
}

export default Activity;
