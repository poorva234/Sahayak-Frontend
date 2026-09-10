import { useNavigate } from "react-router-dom";
import { ArrowRight, ClipboardList } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { mockApplications } from "../lib/mockData";
import { statusColor } from "../lib/utils";

export default function ApplicationsPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#1A1826]">My Applications</h1>
            <p className="text-sm text-[#71697E] mt-1">Track all your scheme applications in one place.</p>
          </div>
          <button
            onClick={() => navigate("/schemes")}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#6D3FC8] text-white rounded-xl text-sm font-medium hover:bg-[#5a33a8] transition-colors"
          >
            Apply for Scheme <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Status summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Draft", count: 1 },
            { label: "Submitted", count: 0 },
            { label: "Under Review", count: 1 },
            { label: "Approved", count: 1 },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-[#E4DFFA] p-4 text-center">
              <p className="text-2xl font-bold font-mono text-[#1A1826]">{s.count}</p>
              <p className="text-xs text-[#71697E] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Application list */}
        <div className="space-y-3">
          {mockApplications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl border border-[#E4DFFA] p-5 hover:border-[#C4B5FD] hover:shadow-sm transition-all cursor-pointer"
              onClick={() => navigate(`/applications/${app.id}`)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EDE9FE] flex items-center justify-center shrink-0">
                    <ClipboardList className="w-5 h-5 text-[#6D3FC8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1826]">{app.schemeName}</h3>
                    <p className="text-xs text-[#71697E] mt-0.5">{app.department}</p>
                    {app.referenceNumber && (
                      <p className="text-xs font-mono text-[#71697E] mt-1">{app.referenceNumber}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${statusColor(app.status)}`}>
                    {app.status}
                  </span>
                  <p className="text-xs text-[#71697E]">Updated {app.lastUpdated.split("T")[0]}</p>
                </div>
              </div>

              {/* Mini timeline */}
              <div className="mt-4 flex items-center gap-1 overflow-hidden">
                {app.timeline.map((ev, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 min-w-0">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        ev.done ? "bg-[#6D3FC8]" : "bg-[#E4DFFA]"
                      } ${ev.active ? "ring-2 ring-[#6D3FC8]/30" : ""}`}
                    />
                    {i < app.timeline.length - 1 && (
                      <div className="absolute w-full h-px bg-[#E4DFFA]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
