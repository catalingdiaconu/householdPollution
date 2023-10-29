import React, { useState, useEffect } from 'react';

export default function TimeComponent () {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 5000); // Updates every 5 seconds
})

  return currentTime;
};