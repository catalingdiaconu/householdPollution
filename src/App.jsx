import React, { useState } from 'react';
import { Menu } from './components/organism/menu';
import { Dashboard } from './components/pages/Dashboard';
import { Devices } from './components/pages/Devices';
import { ClimateCategory } from './components/pages/ClimateCategory';

const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const handleClick = (page) => {
        setCurrentPage(page);
        console.log(page)
    };

    return (
      <div className="flex ">
        <Menu onMenuClick={handleClick} />
          {(() => {
              switch (currentPage) {
                  case 'dashboard':
                      return <Dashboard />;
                  case 'devices':
                      return <Devices handleClick={handleClick} />;
                  case 'climate':
                      return <ClimateCategory />
                  default:
                      return <Dashboard />;
              }
          })()}
        </div>
    );
};

export default App;
