import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { toast } from 'react-toastify';
import axios from 'axios';

export const Chart = ({ currentPurifierState }) => {
    const [data, setData] = useState([]);
    const [isFirst20Seconds, setIsFirst20Seconds] = useState(true);

    useEffect(() => {
        // Reset to the initial value behavior when the purifier is turned on
        if (currentPurifierState) {
            setIsFirst20Seconds(true);
        }
    }, [currentPurifierState]);

    useEffect(() => {
        let newValue;
        let interval;
        let timeout;

        if (currentPurifierState) {
            interval = setInterval(() => {
                const currentTime = new Date().toLocaleTimeString();
                newValue = isFirst20Seconds ? Math.random() * 20 + 40 : Math.random() * 10 + 90;

                setData(prevData => {
                    if (prevData.length > 9) {
                        prevData.shift();
                    }
                    return [...prevData, { time: currentTime, value: newValue }];
                });
            }, 4000);

            timeout = setTimeout(() => {
                setIsFirst20Seconds(false);
                // Make Axios POST request here
                axios.post('http://localhost:5000/run-command', {
                    "command": "sudo python3 motor_v3.py start"
})
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error:", error);
                });

                toast.info('Abnormal humidity detected! Starting air purifier!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }, 16000);  // 20 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
            if (timeout) clearTimeout(timeout);
        };
    }, [currentPurifierState, isFirst20Seconds]);

    return (
        <div style={{ margin: '40px', marginLeft: '-20px' }}> 
            <LineChart width={1300} height={400} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(tick) => `${tick}%`}/>
                <Tooltip />
            </LineChart>
        </div>
    );
};
