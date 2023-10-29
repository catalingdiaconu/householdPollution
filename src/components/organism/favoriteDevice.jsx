import React from 'react';
import SwitchCheckbox from '../atom/switchCheckbox';

export const FavoriteDevice = ({handlePurifierState, currentPurifierState}) => {
    return (
        <div className='favoriteDevice'>
            <h3>Pinned Device</h3>
            <div className='favoriteDevice_device'>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="activeDevices_device_icon" viewBox="0 0 64 80" x="0px" y="0px">
                    <path d="M24.16,40.37V53.03a42.234,42.234,0,0,0,15.69,0V40.37a44.57,44.57,0,0,1-7.84.72A44.771,44.771,0,0,1,24.16,40.37ZM28.08,52.2a.985.985,0,1,1,.98-.99A.986.986,0,0,1,28.08,52.2Zm0-3.93a.985.985,0,1,1,.98-.99A.986.986,0,0,1,28.08,48.27Zm0-3.93a.985.985,0,1,1,.98-.99A.986.986,0,0,1,28.08,44.34Zm3.93,7.86a.985.985,0,1,1,.98-.99A.986.986,0,0,1,32.01,52.2Zm0-3.93a.985.985,0,1,1,.98-.99A.986.986,0,0,1,32.01,48.27Zm3.92-5.9a.985.985,0,1,1-.98.98A.984.984,0,0,1,35.93,42.37Zm0,3.93a.985.985,0,1,1-.98.98A.984.984,0,0,1,35.93,46.3Zm0,3.93a.985.985,0,1,1-.98.98A.984.984,0,0,1,35.93,50.23Zm-2.94-6.88a.985.985,0,1,1-.98-.98A.984.984,0,0,1,32.99,43.35Z"/>
                    <path d="M39.63,38.37,38.4,33.22a9.68,9.68,0,0,1-6.31,2.32h-.17a9.7,9.7,0,0,1-6.31-2.32l-1.23,5.15A42.027,42.027,0,0,0,39.63,38.37Z"/>
                    <path d="M24.16,55.06v1.562a.986.986,0,0,0,.667.944,25.472,25.472,0,0,0,7.183.8,25.391,25.391,0,0,0,7.173-.8.986.986,0,0,0,.667-.944V55.06a43.976,43.976,0,0,1-7.84.72A43.833,43.833,0,0,1,24.16,55.06Z"/>
                    <path d="M32.09,5.63h-.17a7.767,7.767,0,0,0-7.76,7.76v12.4a7.753,7.753,0,0,0,1.58,4.67.826.826,0,0,1,.21.28,7.76,7.76,0,0,0,5.97,2.8h.17a7.76,7.76,0,0,0,5.97-2.8.826.826,0,0,1,.21-.28,7.753,7.753,0,0,0,1.58-4.67V13.39A7.767,7.767,0,0,0,32.09,5.63ZM37.92,25.7a5.915,5.915,0,1,1-11.83,0V13.47a5.915,5.915,0,0,1,11.83,0Z"/>
                    <path d="M32.01,9.56a3.918,3.918,0,0,0-3.92,3.91V25.7a3.915,3.915,0,1,0,7.83,0V13.47A3.916,3.916,0,0,0,32.01,9.56Z"/>
                    <path d="M20.248,17.394H8.868a2.368,2.368,0,0,1,0-4.736h1.684a.684.684,0,0,1,0,1.368H8.868a1,1,0,1,0,0,2h1.684a2.684,2.684,0,0,0,0-5.368H8.868a4.368,4.368,0,0,0,0,8.736h11.38a1,1,0,0,0,0-2Z"/>
                    <path d="M20.248,21.744H11.854a4.368,4.368,0,0,0,0,8.736h1.684a2.684,2.684,0,1,0,0-5.368H11.854a1,1,0,1,0,0,2h1.684a.684.684,0,0,1,0,1.368H11.854a2.368,2.368,0,1,1,0-4.736h8.394a1,1,0,1,0,0-2Z"/>
                    <path d="M55.132,10.658H53.448a2.684,2.684,0,1,0,0,5.368h1.684a1,1,0,0,0,0-2H53.448a.684.684,0,1,1,0-1.368h1.684a2.368,2.368,0,1,1,0,4.736H43.752a1,1,0,0,0,0,2h11.38a4.368,4.368,0,1,0,0-8.736Z"/>
                    <path d="M52.146,21.744H43.752a1,1,0,0,0,0,2h8.394a2.368,2.368,0,1,1,0,4.736H50.462a.684.684,0,0,1,0-1.368h1.684a1,1,0,0,0,0-2H50.462a2.684,2.684,0,0,0,0,5.368h1.684a4.368,4.368,0,1,0,0-8.736Z"/>
                </svg>
                <div className='favoriteDevice_device_label'>
                    <h4 >Air purifier</h4>
                    <span>Status: {!currentPurifierState ? "Disconnected" : "Connected"}</span>
                </div>
                <SwitchCheckbox handlePurifierState={handlePurifierState} currentPurifierState={currentPurifierState}/>
            </div>
            <hr />
            <div className='favoriteDevice_info'>
                <div>
                    <span className='favoriteDevice_info_title'>Brand: </span>
                    <span>PureAirMax</span>
                </div>
                <div>
                    <span className='favoriteDevice_info_title'>Model: </span>
                    <span>APX-5000</span>
                </div>
                <div>
                    <span className='favoriteDevice_info_title'>MAC Address: </span>
                    <span>74:D0:2B:A3:F4:59</span>
                </div>
                <div>
                    <span className='favoriteDevice_info_title'>Serial Number: </span>
                    <span>PAM50001023876 </span>
                </div>
                <div>
                    <span className='favoriteDevice_info_title'>Firmware Version: </span>
                    <span>1.0.4</span>
                </div>
                <div>
                    <span className='favoriteDevice_info_title'>Connectivity: </span>
                    <span>Wi-Fi 802.11 b/g/n, Bluetooth 5.0</span>
                </div>
            </div>
        </div>
    );
};