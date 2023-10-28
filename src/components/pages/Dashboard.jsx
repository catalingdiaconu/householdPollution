import React from 'react';
import { LineChart } from '../charts/lineChart/lineChart';
import { FavoriteDevice } from '../organism/favoriteDevice';

export const Dashboard = () => {
    return (
        <div className='dashboardPage basePage'>
            <FavoriteDevice />
            {/* <LineChart valueXAxis={0} valueYAxis={0}/> */}
        </div>
    );
};

export default Dashboard;
