import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, FileText, ChevronRight } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import Badge from "../components/ui/Badge";
import { mockSchemes } from "../lib/mockData";
import { matchColor } from "../lib/utils";

export default function SchemeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scheme = mockSchemes.find((s) => s.id === id);

  if (!scheme) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center text-[#71697E]">Scheme not found.</div>
      </DashboardLayout>
    );
  }

  const pct = scheme.matchPercentage ?? 0;

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Back */}
        <button
          onClick={() => navigate("/schemes")}
          className="flex items-center gap-1.5 text-sm text-[#71697E] hover:text-[#1A1826] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Schemes
        </button>

        {/* Header */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">{scheme.category}</Badge>
                {scheme.isCentral && <Badge variant="primary">Central Scheme</Badge>}
              </div>
              <h1 className="font-serif text-2xl text-[#1A1826] mb-1">{scheme.name}</h1>
              <p className="text-sm text-[#71697E]">{scheme.department} · {scheme.ministry}</p>
            </div>
            {pct > 0 && (
              <div className="text-center shrink-0">
                <div className={`text-3xl font-bold font-mono ${matchColor(pct)}`}>{pct}%</div>
                <div className="text-xs text-[#71697E]">eligibility match</div>
                <div className="text-[10px] text-[#71697E]">preliminary only</div>
              </div>
            )}
          </div>
          <p className="text-sm text-[#71697E] mt-4 leading-relaxed">{scheme.description}</p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => navigate("/eligibility")}
              className="flex items-center gap-2 px-5 py-2.5 border border-[#DDD6FE] text-[#6D3FC8] rounded-xl text-sm font-medium hover:bg-[#EDE9FE] transition-colors"
            >
              Check My Eligibility
            </button>
            <button
              onClick={() => navigate("/applications")}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#6D3FC8] text-white rounded-xl text-sm font-medium hover:bg-[#5a33a8] transition-colors"
            >
              Start Application <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Benefits */}
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Benefits</h2>
            <ul className="space-y-2.5">
              {scheme.benefits.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-[#71697E]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Eligibility Criteria</h2>
            <ul className="space-y-3">
              {scheme.eligibilityCriteria.map((c, i) => (
                <li key={i} className="flex gap-2.5">
                  {c.met === true ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  ) : c.needsVerification ? (
                    <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-[#C4B5FD] mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="text-xs font-medium text-[#1A1826]">{c.label}</p>
                    <p className="text-xs text-[#71697E]">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#71697E] mt-4 p-3 bg-amber-50 rounded-lg">
              Final eligibility is determined by the relevant government authority.
            </p>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Required Documents</h2>
            <ul className="space-y-2.5">
              {scheme.requiredDocuments.map((d, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-[#71697E]">
                  <FileText className="w-4 h-4 text-[#6D3FC8] mt-0.5 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Application Process</h2>
            <ol className="space-y-3">
              {scheme.applicationProcess.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#71697E]">
                  <span className="w-5 h-5 rounded-full bg-[#EDE9FE] text-[#6D3FC8] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Important info */}
        <div className="bg-[#F6F5FF] rounded-xl border border-[#E4DFFA] p-5">
          <h2 className="text-sm font-semibold text-[#1A1826] mb-2">Important Information</h2>
          <p className="text-sm text-[#71697E] leading-relaxed">{scheme.importantInfo}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
