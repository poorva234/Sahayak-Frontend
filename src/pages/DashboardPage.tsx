import { useNavigate } from "react-router-dom";
import { CheckCircle2, Search, FileUp, ClipboardList, ArrowRight, TrendingUp } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SchemeCard from "../components/schemes/SchemeCard";
import Progress from "../components/ui/Progress";
import { mockSchemes, mockApplications, mockNotifications } from "../lib/mockData";
import { statusColor } from "../lib/utils";

const quickActions = [
  { icon: CheckCircle2, label: "Check Eligibility", to: "/eligibility", color: "text-[#6D3FC8] bg-[#EDE9FE]" },
  { icon: Search, label: "Find Schemes", to: "/schemes", color: "text-emerald-600 bg-emerald-50" },
  { icon: FileUp, label: "Upload Documents", to: "/documents", color: "text-amber-600 bg-amber-50" },
  { icon: ClipboardList, label: "Track Applications", to: "/applications", color: "text-blue-600 bg-blue-50" },
];

const statusCounts = {
  Draft: mockApplications.filter((a) => a.status === "Draft").length,
  Submitted: mockApplications.filter((a) => a.status === "Submitted").length,
  "Under Review": mockApplications.filter((a) => a.status === "Under Review").length,
  Approved: mockApplications.filter((a) => a.status === "Approved").length,
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const unread = mockNotifications.filter((n) => !n.isRead).length;

  return (
    <DashboardLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-8">
        {/* Greeting */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#1A1826]">Good morning, Priya.</h1>
            <p className="text-sm text-[#71697E] mt-1">Here's what's relevant for you today.</p>
          </div>
          {unread > 0 && (
            <button
              onClick={() => navigate("/notifications")}
              className="flex items-center gap-2 px-3 py-2 bg-[#EDE9FE] rounded-lg text-sm text-[#6D3FC8] font-medium hover:bg-[#DDD6FE] transition-colors"
            >
              {unread} new notification{unread > 1 ? "s" : ""}
            </button>
          )}
        </div>

        {/* Profile completion */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-5 flex items-center gap-6">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1A1826] mb-1">Profile Completion</p>
            <p className="text-xs text-[#71697E] mb-3">Complete your profile to improve scheme recommendations.</p>
            <Progress value={74} showLabel />
          </div>
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-1.5 text-sm font-medium text-[#6D3FC8] hover:text-[#5a33a8] shrink-0 transition-colors"
          >
            Complete Profile <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick actions */}
        <div>
          <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                onClick={() => navigate(a.to)}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-[#E4DFFA] hover:border-[#C4B5FD] hover:shadow-sm transition-all duration-200 text-center"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.color}`}>
                  <a.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-[#1A1826]">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Application overview */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#1A1826]">Application Overview</h2>
            <button onClick={() => navigate("/applications")} className="text-xs text-[#6D3FC8] hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="bg-white rounded-xl border border-[#E4DFFA] p-4 text-center">
                <p className="text-2xl font-bold font-mono text-[#1A1826]">{count}</p>
                <p className="text-xs text-[#71697E] mt-1">{status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended schemes */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-[#1A1826]">Recommended For You</h2>
              <p className="text-xs text-[#71697E]">Based on your profile · Demo data</p>
            </div>
            <button onClick={() => navigate("/schemes")} className="text-xs text-[#6D3FC8] hover:underline">See all</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSchemes.slice(0, 3).map((s) => (
              <SchemeCard key={s.id} scheme={s} compact />
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl border border-[#E4DFFA] divide-y divide-[#F2EFFB]">
            {mockApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 hover:bg-[#F6F5FF] transition-colors cursor-pointer" onClick={() => navigate(`/applications/${app.id}`)}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#6D3FC8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1826]">{app.schemeName}</p>
                    <p className="text-xs text-[#71697E]">Updated {app.lastUpdated.split("T")[0]}</p>
                  </div>
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${statusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
