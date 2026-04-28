import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import UserRequestTable from './components/UserRequestTable';
import { decryptResponse } from './apiUtils';
import { Menu, Bell, ChevronDown } from 'lucide-react';

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [dashboardInfo, setDashboardInfo] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch('https://services-encr.iserveu.online/dev/nsdlab-internal/user-mgmt/user/dashboard');
        const encryptedData = await response.json();
        // Use our utility to decrypt the response using sKey
        const decryptedData = decryptResponse(encryptedData.RequestData);
        setDashboardInfo(decryptedData);
      } catch (err) {
        console.error("Failed to fetch dashboard", err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#F8F9FA] font-sans overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <Menu size={20} className="text-gray-500 cursor-pointer" />
          <div className="flex items-center gap-6">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-[#B33D44] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">9</span>
            </div>
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                {/* Dynamically show initials if dashboardInfo exists */}
                {dashboardInfo ? dashboardInfo.userName.substring(0,2).toUpperCase() : 'SB'}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {dashboardInfo ? dashboardInfo.userName : 'Stebin Ben'}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-auto p-10">
          {activePage === 'dashboard' ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-sm border-2 border-dashed border-[#4A90E2]/30">
              <h1 className="text-[28px] font-semibold text-gray-800 mb-2">Welcome to NSDL</h1>
              <p className="text-gray-500 font-medium">Banking made easy - JUST IN A JIFFY</p>
              {dashboardInfo && <p className="mt-4 text-xs text-gray-400">Last login: {dashboardInfo.lastLogin}</p>}
            </div>
          ) : (
            <UserRequestTable />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;