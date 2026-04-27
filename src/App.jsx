import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserRequestTable from './components/UserRequestTable';
import { Menu, Bell, ChevronDown } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen w-full bg-white antialiased">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER SECTION */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-gray-50 bg-white">
          <Menu size={20} className="text-gray-400 cursor-pointer" strokeWidth={1.5} />
          
          <div className="flex items-center gap-8">
            <div className="relative cursor-pointer">
              <Bell size={21} className="text-gray-400" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#B33D44] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">9</span>
            </div>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">SB</div>
              <span className="text-[13px] font-semibold text-gray-700">Pradipta Mandal</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* MAIN DASHBOARD SCREEN (RESTORED DASHED BLUE DESIGN) */}
        <main className="flex-1 bg-[#F8F9FA] p-8 overflow-auto">
          {activePage === 'dashboard' ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-sm border-2 border-dashed border-[#4A90E2]/30">
              <h1 className="text-[28px] font-semibold text-gray-700 tracking-tight">Welcome to NSDL</h1>
              <p className="text-gray-400 text-sm mt-2 font-medium tracking-wide">
                Banking made easy - JUST IN A JIFFY
              </p>
            </div>
          ) : (
            <UserRequestTable />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;