import React, { useState } from 'react';
import { Menu } from './components/organism/menu';
import { Dashboard } from './components/pages/Dashboard';
import { Devices } from './components/pages/Devices';
import { ClimateCategory } from './components/pages/ClimateCategory';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const App  = () => {
    const [currentPage, setCurrentPage] = useState('');
    const [currentPurifierState, setPurifierState] = useState(false);

    const handleClick = (page) => {
        setCurrentPage(page);
        console.log(page)
    };

    const handlePurifierState = (state) => {
        setPurifierState(state);
    }


    return (
      <div className="flex ">
        <Menu onMenuClick={handleClick} />
        <ToastContainer />
          {(() => {
              switch (currentPage) {
                  case 'dashboard':
                    default:
                        return <Dashboard handlePurifierState={handlePurifierState} currentPurifierState={currentPurifierState}/>;
                  case 'devices':
                      return <Devices handleClick={handleClick} />;
                  case 'climate':
                      return <ClimateCategory />
              }
          })()}
        </div>
    );
};
