import React, {useState, useEffect} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const width = 1200;
const height = 500;
const margin = { top: 20, right: 80, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

export const Chart = ({valueXAxis, valueYAxis}) => {
    const min = 1.8;
    const max = 2.2;
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString(); // Get current time
            const newValue = Math.random() * 20 + 40; // Generate random data for demonstration

            // Set the new data point and remove the first data point if data length exceeds 10
            setData(prevData => {
                if (prevData.length > 9) {
                    prevData.shift();
                }
                return [...prevData, { time: currentTime, value: newValue }];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ margin: '40px', marginLeft: '-20px' }}>
            <LineChart width={1100} height={400} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis tickFormatter={(tick) => `${tick}%`}/>
                <Tooltip />
            </LineChart>
        </div>
    );
};
