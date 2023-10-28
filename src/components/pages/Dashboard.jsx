import React from 'react';
import { LineChart } from '../charts/lineChart/lineChart';
import { FavoriteDevice } from '../organism/favoriteDevice';

export const Dashboard = () => {
    return (
        <div className='dashboardPage basePage'>
            <FavoriteDevice />
            <div className='lineChart'>
            <LineChart valueXAxis={0} valueYAxis={0}/>
            </div>
        </div>
    );
};

export default Dashboard;
