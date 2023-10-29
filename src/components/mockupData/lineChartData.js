import React, {useEffect, useState} from "react";

export default function GenerateRandomNumber() {
    const min = 1.8;
    const max = 2.2;

    const [currentData, setCurrentData] = useState(Math.random() * (max - min) + min);
    useEffect(() => {
        setInterval(() => {
            setCurrentData(Math.random() * (max - min) + min);
        }, 5000); // Updates every 5 seconds
    })

    return currentData;
}