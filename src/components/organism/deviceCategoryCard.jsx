import React from 'react';

export const DeviceCategoryCard = () => {
    return (
        <div className='deviceCategoryCard'>
            <div className='deviceCategoryCard_headerInfo'>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <title/>
                <g data-name="Thermometer" id="Thermometer-2">
                <path d="M32.2446,37.2l-1.8706-1.501a1.0014,1.0014,0,0,1-.374-.78V13a4,4,0,0,0-8,0V34.9189a1.0014,1.0014,0,0,1-.374.78L19.7554,37.2a10,10,0,1,0,12.4892,0Z"/>
                <path d="M37,32.05V13a11,11,0,0,0-22,0V32.05a17,17,0,1,0,22,0ZM26,57a11.9934,11.9934,0,0,1-7.4966-21.36L20,34.44V13a6,6,0,0,1,12,0V34.44l1.4966,1.2A11.9934,11.9934,0,0,1,26,57Z"/>
                <path d="M54,14H42a1,1,0,0,1,0-2H54a1,1,0,0,1,0,2Z"/>
                <path d="M51,22H42a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"/>
                <path d="M48,30H42a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/>
                </g>
            </svg>
            <h2>Climate Devices</h2>
            </div>
            <div className="deviceCategoryCard_content">
                <h3>Manage and control all your climate devices in one place.</h3>
            </div>
        </div>
    );
};
