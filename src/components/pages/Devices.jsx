import React from 'react';
import { DeviceCategoryCard } from '../organism/deviceCategoryCard';

export const Devices = ({ devices }) => {
    return (
        <div className="devicesPage">
            <DeviceCategoryCard />
            {/* {devices.map(device => (
                <div key={device.id} className="device-card">
                    <h3>{device.name}</h3>
                    <p>{device.description}</p>
                    <img src={device.image} alt={device.name} />
                </div>
            ))} */}
        </div>
    );
};
