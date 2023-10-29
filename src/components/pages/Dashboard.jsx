import React from 'react';
import { Chart } from '../charts/lineChart/chart';
import { FavoriteDevice } from '../organism/favoriteDevice';

export const Dashboard = () => {
    return (
        <div className='dashboardPage basePage'>
            <FavoriteDevice />
            <div className='lineChart'>
            <Chart valueXAxis={0} valueYAxis={0}/>
            </div>
        </div>
    );
};

export default Dashboard;
