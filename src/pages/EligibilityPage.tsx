import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle, Loader2 } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { mockProfile, mockSchemes } from "../lib/mockData";
import { matchColor } from "../lib/utils";

const steps = [
  "Analysing profile",
  "Checking eligibility rules",
  "Matching scheme requirements",
  "Generating result",
];

export default function EligibilityPage() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);
  const [done, setDone] = useState(false);

  const runAssessment = async () => {
    setRunning(true);
    setDone(false);
    for (let i = 0; i < steps.length; i++) {
      setStep(i);
      await new Promise((r) => setTimeout(r, 900));
    }
    setRunning(false);
    setDone(true);
  };

  const topSchemes = mockSchemes.filter((s) => (s.matchPercentage ?? 0) >= 60).slice(0, 4);

  return (
    <DashboardLayout>
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="font-serif text-3xl text-[#1A1826]">AI Eligibility Assessment</h1>
          <p className="text-sm text-[#71697E] mt-1">
            A preliminary assessment based on your profile. Final eligibility is determined by the relevant authority.
          </p>
        </div>

        {/* Profile summary */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
          <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Profile Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Age", value: `${mockProfile.age} years` },
              { label: "Category", value: mockProfile.category },
              { label: "State", value: mockProfile.state },
              { label: "Income", value: mockProfile.incomeRange },
              { label: "Employment", value: mockProfile.employmentStatus },
              { label: "Education", value: mockProfile.educationLevel },
            ].map((f) => (
              <div key={f.label} className="bg-[#F6F5FF] rounded-lg px-3 py-2.5">
                <p className="text-xs text-[#71697E] uppercase tracking-wide">{f.label}</p>
                <p className="text-sm font-medium text-[#1A1826] mt-0.5">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment button */}
        {!running && !done && (
          <button
            onClick={runAssessment}
            className="w-full py-3.5 bg-[#6D3FC8] text-white rounded-xl font-medium hover:bg-[#5a33a8] transition-colors"
          >
            Run Eligibility Assessment
          </button>
        )}

        {/* Progress steps */}
        {(running || done) && (
          <div className="bg-white rounded-xl border border-[#E4DFFA] p-5 space-y-3">
            <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Assessment Progress</h2>
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                {done || i < step ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : i === step ? (
                  <Loader2 className="w-5 h-5 text-[#6D3FC8] animate-spin shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-[#E4DFFA] shrink-0" />
                )}
                <span className={`text-sm ${i <= step || done ? "text-[#1A1826]" : "text-[#71697E]"}`}>{s}</span>
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {done && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
            {/* Result card */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h2 className="font-semibold text-emerald-800">Likely Eligible for Multiple Schemes</h2>
              </div>
              <p className="text-sm text-emerald-700">
                Preliminary eligibility assessment complete. Your profile matches the criteria of several welfare schemes. Final eligibility is determined by the relevant government authority.
              </p>
            </div>

            {/* Scheme matches */}
            <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
              <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Scheme Match Results</h2>
              <div className="space-y-4">
                {topSchemes.map((scheme) => (
                  <div key={scheme.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-sm font-medium text-[#1A1826]">{scheme.name}</p>
                      <span className={`text-sm font-bold font-mono ${matchColor(scheme.matchPercentage ?? 0)}`}>
                        {scheme.matchPercentage}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#E4DFFA] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          (scheme.matchPercentage ?? 0) >= 85 ? "bg-emerald-500" : (scheme.matchPercentage ?? 0) >= 65 ? "bg-amber-400" : "bg-red-400"
                        }`}
                        style={{ width: `${scheme.matchPercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Criteria breakdown */}
            <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
              <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Profile Assessment Details</h2>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle2, color: "text-emerald-500", label: "Age criteria", note: "Met for all matched schemes" },
                  { icon: CheckCircle2, color: "text-emerald-500", label: "Income range", note: "Qualifies for EWS / LIG tier benefits" },
                  { icon: CheckCircle2, color: "text-emerald-500", label: "Social category (OBC)", note: "Eligible for OBC-specific schemes" },
                  { icon: AlertCircle, color: "text-amber-500", label: "Employment type verification", note: "Artisan/craftsperson credential needs verification at CSC" },
                  { icon: AlertCircle, color: "text-amber-500", label: "Caste certificate", note: "Uploaded document needs re-upload for verification" },
                  { icon: XCircle, color: "text-[#C4B5FD]", label: "Property ownership status", note: "Information missing from profile" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                    <div>
                      <p className="text-sm font-medium text-[#1A1826]">{item.label}</p>
                      <p className="text-xs text-[#71697E]">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setDone(false); setStep(-1); }}
              className="w-full py-2.5 border border-[#DDD6FE] text-[#6D3FC8] rounded-xl text-sm font-medium hover:bg-[#EDE9FE] transition-colors"
            >
              Run Assessment Again
            </button>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}
