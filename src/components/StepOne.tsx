"use client";

import { useState } from 'react';

const StepOneForm = ({ onNext, onStepChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    // Toggle option selection
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNext = () => {
    // Pass selected options to parent component
    onNext(selectedOptions);
    // Notify parent component to change step based on selected options
    onStepChange(selectedOptions);
  };

  return (
    <div>
      <h2>Step One Form</h2>
      {/* Render checkboxes for options */}
      <div>
        <input
          type="checkbox"
          id="Kooperationen"
          checked={selectedOptions.includes('Kooperationen')}
          onChange={() => handleOptionClick('Kooperationen')}
        />
        <label htmlFor="Kooperationen">Kooperationen</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Praxisforschung"
          checked={selectedOptions.includes('Praxisforschung')}
          onChange={() => handleOptionClick('Praxisforschung')}
        />
        <label htmlFor="Praxisforschung">Praxisforschung</label>
      </div>
      {/* Add more checkboxes as needed */}
      
      {/* Always show the next button */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOneForm;
