import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Search, Menu, ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-screen flex overflow-hidden bg-[#F6F5FF]">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#E4DFFA] flex items-center gap-4 px-6 shrink-0">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 text-[#71697E] hover:text-[#1A1826] hover:bg-[#F2EFFB] rounded-lg transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71697E]" />
            <input
              type="text"
              placeholder="Search schemes, documents..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F6F5FF] border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Notification bell */}
            <button
              onClick={() => navigate("/notifications")}
              className="relative p-2 text-[#71697E] hover:text-[#1A1826] hover:bg-[#F2EFFB] rounded-lg transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#6D3FC8] rounded-full" />
            </button>

            {/* User */}
            <button className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-lg hover:bg-[#F2EFFB] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6D3FC8] text-sm font-semibold">
                P
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-medium text-[#1A1826] leading-tight">Priya Sharma</p>
                <p className="text-xs text-[#71697E] leading-tight">Citizen</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#71697E]" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
