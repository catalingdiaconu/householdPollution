import React from 'react';
import { LineChart } from '../charts/lineChart/lineChart';

export const Dashboard = () => {
    return (
        <div>
            <LineChart valueXAxis={0} valueYAxis={0}/>
        </div>
    );
};

export default Dashboard;
