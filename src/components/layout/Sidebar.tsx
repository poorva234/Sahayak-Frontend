import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Search,
  CheckCircle2,
  FileText,
  ClipboardList,
  Bell,
  MessageSquare,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";

const nav = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/profile", icon: User, label: "My Profile" },
  { to: "/schemes", icon: Search, label: "Find Schemes" },
  { to: "/eligibility", icon: CheckCircle2, label: "Eligibility" },
  { to: "/documents", icon: FileText, label: "Documents" },
  { to: "/applications", icon: ClipboardList, label: "Applications" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/assistant", icon: MessageSquare, label: "AI Assistant" },
];

interface SidebarProps {
  collapsed?: boolean;
}

export default function Sidebar({ collapsed = false }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside
      className={`flex flex-col bg-white border-r border-[#E4DFFA] h-full transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-4 border-b border-[#E4DFFA] shrink-0">
        <div className="w-8 h-8 rounded-lg bg-[#6D3FC8] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {!collapsed && <span className="font-semibold text-[#1A1826] tracking-tight">Sahayak</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          {nav.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#6D3FC8] text-white"
                      : "text-[#71697E] hover:bg-[#F2EFFB] hover:text-[#1A1826]"
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="p-2 border-t border-[#E4DFFA] space-y-0.5">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive ? "bg-[#6D3FC8] text-white" : "text-[#71697E] hover:bg-[#F2EFFB] hover:text-[#1A1826]"
            }`
          }
        >
          <Settings className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Settings</span>}
        </NavLink>
        <button
          onClick={() => navigate("/login")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#71697E] hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
