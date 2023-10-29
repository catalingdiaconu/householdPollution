import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartComponent = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'My Data',
                data: data,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return <Line data={chartData} />;
};

export default LineChartComponent;
