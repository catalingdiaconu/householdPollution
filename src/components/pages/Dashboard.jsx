import React from 'react';
import { LineChart } from '../charts/lineChart/lineChart';
import { ActiveDevices } from '../organism/activeDevices';

export const Dashboard = () => {
    return (
        <div className='dashboardPage basePage'>
            <ActiveDevices />
            {/* <LineChart valueXAxis={0} valueYAxis={0}/> */}
        </div>
    );
};

export default Dashboard;
