import React from 'react';
import Device from '../molecule/device';
import { ReactComponent as OnlineIcon } from '../../assets/online-icon.svg';

export const DeviceContainer = ({ devices }) => {
    return (
        <div>
            {devices.map(device => (
                <div key={device.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <OnlineIcon style={{ marginRight: '8px' }} />
                    <Device name={device.name} status={device.status} />
                </div>
            ))}
        </div>
    );
};