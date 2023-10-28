import React, { useState } from 'react';
import { Menu } from './components/organism/menu';
import { Dashboard } from './components/pages/Dashboard';
import { Devices } from './components/pages/Devices';

const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const handleMenuClick = (page) => {
        setCurrentPage(page);
        console.log(page)
    };

    return (
      <div className="flex ">
        <Menu onMenuClick={handleMenuClick} />
          {(() => {
              switch (currentPage) {
                  case 'dashboard':
                      return <Dashboard />;
                  case 'devices':
                      return <Devices />;
                  default:
                      return <Dashboard />;
              }
          })()}
        </div>
    );
};

export default App;
