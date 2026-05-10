import {
  BookOpenText,
  CalendarClock,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Plus,
  Settings,
  UserRoundCheck,
  Users,
  Wallet,
  Waypoints,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-70 p-5 h-screen bg-white border-r border-gray-200 flex flex-col fixed">
      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-[#00236F]">VBCI Systems</h1>
        <p className="text-sm text-[#444651]">Church Management</p>
      </div>

      {/* New Record Button */}
      <div className="mb-5">
        <button className="w-full cursor-pointer py-4 bg-[#00236F] hover:bg-[#1E40AF] transition-colors text-white rounded-[8px] flex items-center justify-center gap-1.5 shadow-sm">
          <Plus className="h-4 w-4" />
          New Record
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col border-b mb-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] text-black mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard className="h-4.5 w-4.5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/members"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Users className="h-4.5 w-4.5" />
          <span className="font-medium">Members</span>
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <UserRoundCheck className="h-4.5 w-4.5" />
          <span className="font-medium">Attendance</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <CalendarClock className="h-4.5 w-4.5" />
          <span className="font-medium">Events</span>
        </NavLink>

        <NavLink
          to="/finance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Wallet className="h-4.5 w-4.5" />
          <span className="font-medium">Finance</span>
        </NavLink>

        <NavLink
          to="/sermons"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <BookOpenText className="h-4.5 w-4.5" />
          <span className="font-medium">Sermons</span>
        </NavLink>

        <NavLink
          to="/cell-groups"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Waypoints className="h-4.5 w-4.5" />
          <span className="font-medium">Cell Groups</span>
        </NavLink>

        <NavLink
          to="/annoucements"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-[16px] mx-1 rounded-[8px] mb-1 transition-all ${
              isActive
                ? "bg-[#8B4EF7] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          <Megaphone className="h-4.5 w-4.5" />
          <span className="font-medium">Announcements</span>
        </NavLink>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-gray-100 p-3">
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-2  py-1 text-gray-700 hover:bg-gray-100 rounded-[8px] transition-all">
            <Settings className="h-4.5 w-4.5" />
            Settings
          </button>

          <button className="flex items-center gap-2  py-1 text-gray-700 hover:bg-gray-100 rounded-xl transition-all">
            <LogOut className="h-4.5 w-4.5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
