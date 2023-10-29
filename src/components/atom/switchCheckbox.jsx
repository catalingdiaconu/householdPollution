import React, { useState } from 'react';
import axios from 'axios';

function SwitchCheckbox({handlePurifierState,currentPurifierState}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newState = !currentPurifierState;
    setIsChecked(newState);
    if(currentPurifierState) {
        axios.post('http://localhost:5000/run-command', {
            "command": "sudo python3 motor_v3.py stop"
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    handlePurifierState(newState);
  }               

  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" checked={currentPurifierState} onChange={handleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default SwitchCheckbox;