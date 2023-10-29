import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const ChartPurifierConsumption = ({ currentPurifierState }) => {
    const min = 1.8;
    const max = 2.2;
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
                newValue = isFirst20Seconds ? Math.random() * (max - min) + min : Math.random() * (max - min) + min + 1.7;

                setData(prevData => {
                    if (prevData.length > 9) {
                        prevData.shift();
                    }
                    return [...prevData, { time: currentTime, value: newValue }];
                });
            }, 4000);

            timeout = setTimeout(() => {
                setIsFirst20Seconds(false);
            }, 16000);  // 20 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
            if (timeout) clearTimeout(timeout);
        };
    }, [currentPurifierState, isFirst20Seconds]);

    return (
        <div style={{ margin: '20px', marginLeft: '0', marginTop: "-10px" }}> 
            <LineChart width={1100} height={360} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(tick) => `${tick}W`}/>
                <Tooltip />
            </LineChart>
        </div>
    );
};
