import './general.css';
import React from 'react'; 

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-input-wrapper ${className}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect} className="select-input">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
