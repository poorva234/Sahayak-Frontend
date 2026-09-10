import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SchemeCard from "../components/schemes/SchemeCard";
import { mockSchemes } from "../lib/mockData";
import type { SchemeCategory } from "../types/scheme";

const categories: SchemeCategory[] = ["Agriculture", "Education", "Health", "Housing", "Employment", "Women & Child", "Senior Citizens", "Disability", "SC/ST/OBC", "Financial Inclusion"];
const tabs = ["Recommended", "All Schemes", "Saved"];

export default function SchemesPage() {
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = mockSchemes.filter((s) => {
    const matchQ = !query || s.name.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase());
    const matchC = category === "All" || s.category === category;
    const matchTab = tab === 2 ? false : tab === 0 ? (s.matchPercentage ?? 0) >= 70 : true;
    return matchQ && matchC && matchTab;
  });

  return (
    <DashboardLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl text-[#1A1826]">Find Welfare Schemes</h1>
          <p className="text-sm text-[#71697E] mt-1">Browse and filter schemes from central and state governments · Demo data</p>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71697E]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search schemes..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-[#E4DFFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E4DFFA] rounded-xl text-sm text-[#71697E] hover:border-[#C4B5FD] transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                category === c
                  ? "bg-[#6D3FC8] text-white"
                  : "bg-white border border-[#E4DFFA] text-[#71697E] hover:border-[#C4B5FD]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#F2EFFB] rounded-lg p-1 w-fit">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab === i ? "bg-white text-[#1A1826] shadow-sm" : "text-[#71697E] hover:text-[#1A1826]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Results */}
        {tab === 2 ? (
          <div className="text-center py-16 text-[#71697E]">
            <p className="text-sm">No saved schemes yet. Bookmark schemes to access them here.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-[#71697E]">
            <p className="text-sm">No schemes found matching your search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
