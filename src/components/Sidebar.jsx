import React, { useState } from 'react';
import { LayoutDashboard, Users, FileText, ChevronDown } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => {
  const [isBankMenuOpen, setIsBankMenuOpen] = useState(true);

  return (
    <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col h-screen shrink-0">
      {/* RESTORED NSDL LOGO SECTION */}
      <div className="px-6 py-7 flex items-center gap-3">
        <div className="bg-[#B33D44] p-1.5 rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">N</div>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[#B33D44] font-bold text-[17px] tracking-tight">NSDL</span>
          <span className="text-gray-400 text-[10px] italic">Payments Bank</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-2">
        {/* Dashboard Link */}
        <div 
          onClick={() => setActivePage('dashboard')}
          className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all ${
            activePage === 'dashboard' ? 'bg-[#FFF1F2] text-[#B33D44] font-semibold' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          <LayoutDashboard size={18} strokeWidth={1.5} />
          <span className="text-[13px]">Dashboard</span>
        </div>

        <div className="mt-8 mb-4 px-4 text-[11px] font-bold text-gray-300 uppercase tracking-widest">
          Widgets
        </div>

        {/* Bank User Management */}
        <div>
          <div 
            onClick={() => setIsBankMenuOpen(!isBankMenuOpen)}
            className="flex items-center justify-between px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Users size={18} strokeWidth={1.5} />
              <span className="text-[13px] font-medium">Bank User Management</span>
            </div>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isBankMenuOpen ? '' : '-rotate-90'}`} />
          </div>

          {isBankMenuOpen && (
            <div className="mt-1">
              <div 
                onClick={() => setActivePage('userRequest')}
                className={`relative flex items-center px-10 py-2.5 text-[13px] cursor-pointer ${
                  activePage === 'userRequest' ? 'text-[#B33D44] bg-[#FFF1F2] font-semibold' : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                {/* Red vertical indicator on the right */}
                {activePage === 'userRequest' && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#B33D44]" />}
                User Request
              </div>
              <div className="px-10 py-2.5 text-[13px] text-gray-400 hover:text-gray-600 cursor-pointer">
                User List Report
              </div>
            </div>
          )}
        </div>

        {/* Audit Trail Link */}
        <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-md cursor-pointer">
          <FileText size={18} strokeWidth={1.5} />
          <span className="text-[13px] font-medium">Audit Trail</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;