import React from 'react';
import { LayoutDashboard, Users, FileText, ChevronDown, Bell, Menu } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, hasArrow }) => (
  <div className={`flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer transition-all ${
    active ? 'bg-[#FFF1F2] text-[#B33D44]' : 'text-gray-600 hover:bg-gray-50'
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={18} strokeWidth={active ? 2.5 : 2} />
      <span className={`text-[13px] ${active ? 'font-semibold' : 'font-medium'}`}>{label}</span>
    </div>
    {hasArrow && <ChevronDown size={14} className="text-gray-400" />}
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-[#F8F9FA] antialiased">
      {/* SIDEBAR */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-5 mb-2">
          <div className="text-[#B33D44] font-bold text-xl tracking-tight">
            NSDL <span className="font-normal text-gray-500 text-sm italic">Payments Bank</span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Widgets
          </div>
          <SidebarItem icon={Users} label="Bank User Management" hasArrow />
          <SidebarItem icon={FileText} label="Audit Trail" />
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={20} className="text-gray-500" />
          </button>
          <div className="flex items-center gap-5">
            <div className="relative p-2 cursor-pointer">
              <Bell size={20} className="text-gray-500" />
              <span className="absolute top-1 right-1 bg-[#B33D44] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">9</span>
            </div>
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-xs font-bold text-orange-700">SB</div>
              <span className="text-[13px] font-semibold text-gray-700">Pradipta Mandal</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="h-full w-full border-2 border-dashed border-blue-400 rounded-lg flex flex-col items-center justify-center bg-white">
            <h1 className="text-2xl font-medium text-gray-700">Welcome to NSDL</h1>
            <p className="text-gray-400 text-sm mt-1">Banking made easy - JUST IN A JIFFY</p>
          </div>
        </main>
      </div>
    </div>
  );
}