import React from 'react';
import { DeviceCategoryCard } from '../organism/deviceCategoryCard';
import {DeviceCategoryCardData} from '../organism/deviceCategoryCardData'

export const Devices = (props) => {
    return (
        <div className="devicesPage">
            <div className='devicesPage_Header'>
                <h1>
                    Manage Devices
                </h1>
                <h3>
                    Manage and control all your devices in one place.
                </h3>
            </div>
            <div className='devicesPage_Cards'>
            {DeviceCategoryCardData.map(category => (
                <DeviceCategoryCard handleClick={props.handleClick} categoryIcon={category.icon} categoryName={category.title}/>
            ))}
            </div>
        </div>
    );
};
