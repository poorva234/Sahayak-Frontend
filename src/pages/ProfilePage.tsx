import { useState } from "react";
import { Check } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import Progress from "../components/ui/Progress";
import { mockProfile } from "../lib/mockData";

const sections = [
  {
    title: "Personal Information",
    fields: [
      { label: "Full Name", key: "name", type: "text" },
      { label: "Age", key: "age", type: "number" },
      { label: "Gender", key: "gender", type: "select", options: ["Male", "Female", "Other"] },
      { label: "State", key: "state", type: "text" },
      { label: "District", key: "district", type: "text" },
      { label: "Pincode", key: "pincode", type: "text" },
    ],
  },
  {
    title: "Education",
    fields: [
      { label: "Education Level", key: "educationLevel", type: "select", options: ["No Formal Education", "Primary", "Secondary", "Diploma", "Graduate", "Post-Graduate"] },
      { label: "Currently a Student?", key: "isStudent", type: "select", options: ["Yes", "No"] },
    ],
  },
  {
    title: "Employment",
    fields: [
      { label: "Employment Status", key: "employmentStatus", type: "select", options: ["Employed", "Self-Employed", "Unemployed", "Student", "Retired"] },
      { label: "Occupation / Trade", key: "occupation", type: "text" },
    ],
  },
  {
    title: "Financial",
    fields: [
      { label: "Annual Income Range", key: "incomeRange", type: "select", options: ["Below 1 LPA", "1–2.5 LPA", "2.5–5 LPA", "5–10 LPA", "Above 10 LPA"] },
    ],
  },
  {
    title: "Family & Category",
    fields: [
      { label: "Family Size", key: "familySize", type: "number" },
      { label: "Social Category", key: "category", type: "select", options: ["General", "OBC", "SC", "ST"] },
      { label: "Has Disability?", key: "hasDisability", type: "select", options: ["Yes", "No"] },
    ],
  },
];

export default function ProfilePage() {
  const [data, setData] = useState<Record<string, string | number | boolean>>({ ...mockProfile });
  const [saved, setSaved] = useState(false);

  const val = (key: string) => String(data[key] ?? "");
  const update = (key: string, value: string) => setData({ ...data, [key]: value });

  const handleSave = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#1A1826]">My Profile</h1>
            <p className="text-sm text-[#71697E] mt-1">Keep your information up to date for better scheme recommendations.</p>
          </div>
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              saved ? "bg-emerald-500 text-white" : "bg-[#6D3FC8] text-white hover:bg-[#5a33a8]"
            }`}
          >
            {saved ? <><Check className="w-4 h-4" /> Saved</> : "Update Profile"}
          </button>
        </div>

        {/* Completion */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-[#1A1826]">Profile Completion</p>
            <span className="text-xs font-mono text-[#6D3FC8]">74%</span>
          </div>
          <Progress value={74} />
          <p className="text-xs text-[#71697E] mt-2">Add your family details and caste certificate to reach 100%</p>
        </div>

        {/* Avatar area */}
        <div className="bg-white rounded-xl border border-[#E4DFFA] p-5 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#6D3FC8] text-2xl font-bold font-serif">
            P
          </div>
          <div>
            <p className="font-semibold text-[#1A1826]">Priya Sharma</p>
            <p className="text-sm text-[#71697E]">priya.sharma@email.com · +91 98765 43210</p>
            <p className="text-xs text-[#71697E] mt-1 font-mono">Citizen ID: SHK-2024-001</p>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-[#E4DFFA] overflow-hidden">
            <div className="px-5 py-3.5 border-b border-[#E4DFFA] bg-[#F6F5FF]">
              <h2 className="text-sm font-semibold text-[#1A1826]">{section.title}</h2>
            </div>
            <div className="p-5 grid sm:grid-cols-2 gap-4">
              {section.fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-[#71697E] mb-1.5 uppercase tracking-wide">{f.label}</label>
                  {f.type === "select" ? (
                    <select
                      value={val(f.key)}
                      onChange={(e) => update(f.key, e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#F6F5FF] border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] text-[#1A1826]"
                    >
                      {(f.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      value={val(f.key)}
                      onChange={(e) => update(f.key, e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#F6F5FF] border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] text-[#1A1826]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-[#71697E] text-center pb-4">
          Sahayak does not collect sensitive financial or biometric data. Information is used only for scheme matching.
        </p>
      </div>
    </DashboardLayout>
  );
}
