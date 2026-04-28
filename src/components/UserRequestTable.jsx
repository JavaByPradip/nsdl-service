import React from 'react';
import { Search, Calendar, ChevronDown, Download, User } from 'lucide-react';

const UserRequestTable = () => {
  const users = Array(8).fill({
    username: 'Deep',
    empId: 'ISU316',
    empName: 'Pradipta Mandal',
    email: 'pradipta.mandal@iserveu.in',
    updatedDate: '12.05.2025',
    updatedBy: 'Carson Darrin'
  });

  return (
    <div className="p-8">
      <nav className="text-[11px] text-gray-400 mb-1">
        Bank User Management / <span className="text-gray-600 font-medium">User Request</span>
      </nav>
      <h1 className="text-[20px] font-bold text-gray-800 mb-6 tracking-tight">User Request</h1>

      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-6">
        <div className="flex gap-6 mb-5 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="search" className="accent-[#B33D44]" defaultChecked /> Search by Date Range
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="search" className="accent-[#B33D44]" /> Search by User Name
          </label>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input type="text" placeholder="Search here" className="w-full pl-10 py-2 border border-gray-200 rounded text-sm outline-none" />
          </div>
          <div className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-400 min-w-[200px] flex justify-between items-center">
            <span>Start date → End date</span> <Calendar size={14} />
          </div>
          <button className="bg-[#B33D44] text-white px-5 py-2 rounded text-sm font-semibold flex items-center gap-2">
            <Download size={16} /> Download Excel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase">
            <tr><th className="px-6 py-4">S. No.</th><th className="px-6 py-4">Username</th><th className="px-6 py-4">Employee ID</th><th className="px-6 py-4">Employee Name</th><th className="px-6 py-4">Email ID</th><th className="px-6 py-4">Updated Date</th><th className="px-6 py-4">Updated By</th></tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                <td className="px-6 py-4 text-blue-500 font-medium">{u.username}</td>
                <td className="px-6 py-4 text-gray-600">{u.empId}</td>
                <td className="px-6 py-4 flex items-center gap-2 font-medium text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"><User size={12} /></div> {u.empName}
                </td>
                <td className="px-6 py-4 text-gray-600">{u.email}</td>
                <td className="px-6 py-4 text-gray-600">{u.updatedDate}</td>
                <td className="px-6 py-4 text-gray-600">{u.updatedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRequestTable;