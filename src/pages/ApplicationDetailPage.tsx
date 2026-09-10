import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Edit } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import ApplicationTimeline from "../components/applications/ApplicationTimeline";
import Badge from "../components/ui/Badge";
import { mockApplications, mockDocuments } from "../lib/mockData";
import { statusColor } from "../lib/utils";

export default function ApplicationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = mockApplications.find((a) => a.id === id);

  if (!app) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center text-[#71697E]">Application not found.</div>
      </DashboardLayout>
    );
  }

  const attachedDocs = mockDocuments.filter((d) => app.attachedDocuments.includes(d.id));

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => navigate("/applications")}
          className="flex items-center gap-1.5 text-sm text-[#71697E] hover:text-[#1A1826] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Applications
        </button>

        {/* Header */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl text-[#1A1826] mb-1">{app.schemeName}</h1>
              <p className="text-sm text-[#71697E]">{app.department}</p>
              {app.referenceNumber && (
                <p className="text-xs font-mono text-[#71697E] mt-1">{app.referenceNumber}</p>
              )}
            </div>
            <span className={`text-xs font-mono px-3 py-1.5 rounded-full ${statusColor(app.status)}`}>
              {app.status}
            </span>
          </div>
          {app.remarks && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              {app.remarks}
            </div>
          )}
          <div className="flex gap-3 mt-5">
            {app.status === "Draft" && (
              <button className="flex items-center gap-2 px-4 py-2 border border-[#DDD6FE] text-[#6D3FC8] rounded-lg text-sm font-medium hover:bg-[#EDE9FE] transition-colors">
                <Edit className="w-3.5 h-3.5" /> Continue Application
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Timeline */}
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-5">Application Timeline</h2>
            <ApplicationTimeline events={app.timeline} />
          </div>

          {/* Details */}
          <div className="space-y-4">
            {/* Key info */}
            <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
              <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Application Details</h2>
              <div className="space-y-3">
                {[
                  { label: "Application ID", value: app.id.toUpperCase() },
                  { label: "Status", value: app.status },
                  { label: "Submitted", value: app.submittedDate ?? "—" },
                  { label: "Last Updated", value: app.lastUpdated.split("T")[0] },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between">
                    <span className="text-xs text-[#71697E]">{f.label}</span>
                    <span className="text-xs font-medium text-[#1A1826] font-mono">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
              <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Attached Documents</h2>
              {attachedDocs.length === 0 ? (
                <p className="text-sm text-[#71697E]">No documents attached yet.</p>
              ) : (
                <div className="space-y-2.5">
                  {attachedDocs.map((doc) => (
                    <div key={doc.id} className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#6D3FC8] shrink-0" />
                      <span className="text-sm text-[#1A1826]">{doc.name}</span>
                      <Badge variant="success">{doc.status}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
