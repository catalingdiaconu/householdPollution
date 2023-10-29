import React from 'react';
import { Chart } from '../charts/lineChart/chart';
import { FavoriteDevice } from '../organism/favoriteDevice';
import SimplePieChart from '../charts/piechart/pieChart';
import { ChartPurifierConsumption } from '../charts/chartPurifierConsumption/chartPurifierConsumption';

export const Dashboard = (props) => {
    return (
        <div className='dashBoardPage basePage'>
            <div className='dashBoardPage_firstRow'>
            <FavoriteDevice handlePurifierState={props.handlePurifierState} currentPurifierState={props.currentPurifierState}/>
            <div className='lineChart'>
                <h1>
                    Humidity (pinned device)
                </h1>
                <Chart currentPurifierState={props.currentPurifierState}/>
            </div>
            </div>
            <div className='dashBoardPage_secondRow'>
            <div className='pieChart'>
                <h1>Electricity consumption (overall)</h1>
                <SimplePieChart />
            </div>
            <div className='chartPurifierConsumption'>
                <h1>
                    Power consumption (pinned device)
                </h1>
                <ChartPurifierConsumption currentPurifierState={props.currentPurifierState}/>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
