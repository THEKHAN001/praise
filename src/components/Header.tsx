import { Search, Bell, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search members, events, or reports..."
            className="w-full bg-gray-100 border border-gray-200 focus:border-gray-300 pl-11 py-2.5 rounded-full text-sm focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Bell size={22} />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-medium text-white">•</span>
          </div>
        </button>

        {/* Help Icon */}
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <HelpCircle size={22} />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500 -mt-0.5">Super Administrator</p>
          </div>
          
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Admin User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}