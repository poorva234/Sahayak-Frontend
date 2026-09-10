import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const suggestions = [
  "Find schemes for me",
  "Check my eligibility",
  "What documents do I need?",
  "Explain PM Vishwakarma Yojana",
  "How do I track my application?",
  "What is Ayushman Bharat?",
];

const mockResponses: Record<string, string> = {
  "find schemes": "Based on your profile — OBC category, self-employed artisan, income below ₹2.5 LPA in Maharashtra — here are your top scheme matches:\n\n• PM Vishwakarma Yojana (94% match) — credit & skill support for traditional artisans\n• PMKVY 4.0 (88% match) — free skill certification and placement support\n• PM Awas Yojana Urban (81% match) — housing subsidy for EWS/LIG\n• Ayushman Bharat PM-JAY (72% match) — ₹5 lakh health coverage per family\n\nWould you like to start an eligibility check or application for any of these?",
  "check my eligibility": "I'll run a quick preliminary check based on your saved profile:\n\n✓ Age (27 years) — eligible for all active schemes\n✓ Category (OBC) — qualifies for OBC-specific schemes and reservations\n✓ Income (₹1.85 LPA) — meets EWS/LIG income criteria\n✓ Employment (Self-employed artisan) — eligible for PM Vishwakarma\n⚠ Caste certificate needs re-upload for formal verification\n\nFor a full assessment report, go to the Eligibility page.",
  "what documents": "For most welfare scheme applications, you will need:\n\n1. Aadhaar Card — identity & address proof ✓ (verified)\n2. Income Certificate — from Tehsildar/SDM ✓ (verified)\n3. Caste Certificate — for OBC schemes ⚠ (needs re-upload)\n4. Bank passbook or statement — for DBT\n5. Ration Card or Family ID — for household schemes\n\nFor PM Vishwakarma specifically, you will also need Aadhaar linked to your mobile for biometric verification at a CSC.",
  "explain pm vishwakarma": "PM Vishwakarma Yojana is a central government scheme launched in September 2023, supporting traditional artisans and craftspeople.\n\nKey benefits:\n• Collateral-free credit: ₹1 lakh (first tranche), up to ₹3 lakh at 5% interest\n• Toolkit support: ₹15,000 grant for tools\n• Skill training: ₹500/day stipend during training\n• Recognition: PM Vishwakarma certificate and digital ID\n• Market linkage and digital transaction incentives\n\nYour profile shows a 94% match. Apply at your nearest Common Service Centre (CSC). The process requires Aadhaar biometric verification.",
  "track": "To track your applications:\n\n1. Go to the Applications section from the sidebar\n2. Each application card shows its current status\n3. Click on any application to see the full timeline\n\nCurrently:\n• PM Vishwakarma — Under Review (ref: PMV/2024/MH/192847)\n• PMKVY 4.0 — Approved (training starts 20 Jan 2025)\n• PM Awas Yojana — Draft (incomplete)\n\nYou will receive notifications when your application status changes.",
  "ayushman bharat": "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides:\n\n• ₹5 lakh annual health coverage per family\n• Cashless treatment at 20,000+ empanelled hospitals\n• Covers 1,900+ medical procedures\n• Pre-existing conditions covered from day one\n• No cap on family size or age\n\nEligibility is primarily based on the SECC 2011 database. Check your eligibility at pmjay.gov.in or call helpline 14555. Your profile shows a 72% match — income and household data will be verified against the SECC database.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lower.includes(key)) return response;
  }
  return "I can help you find welfare schemes, check your eligibility, understand required documents, explain specific schemes, or guide you through the application process. Could you be more specific about what you need help with?";
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hello, Priya! I'm Sahayak's assistant. I can help you discover relevant welfare schemes, check your eligibility, understand required documents, or guide you through applications. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), role: "user", text }]);
    setInput("");
    setThinking(true);
    await new Promise((r) => setTimeout(r, 1000));
    setMessages((m) => [...m, { id: Date.now() + 1, role: "assistant", text: getResponse(text) }]);
    setThinking(false);
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-4rem)] flex flex-col max-w-3xl mx-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E4DFFA] bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6D3FC8] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-[#1A1826]">Sahayak Assistant</h1>
              <p className="text-xs text-[#71697E]">AI-powered scheme guidance · Demo responses</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0 mr-3 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#6D3FC8]" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-[#6D3FC8] text-white rounded-br-sm"
                    : "bg-white border border-[#E4DFFA] text-[#1A1826] rounded-bl-sm shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {thinking && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0 mr-3">
                <Sparkles className="w-4 h-4 text-[#6D3FC8]" />
              </div>
              <div className="bg-white border border-[#E4DFFA] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 bg-[#C4B5FD] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="px-6 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-sm px-3.5 py-2 bg-white border border-[#E4DFFA] text-[#6D3FC8] rounded-xl hover:bg-[#EDE9FE] hover:border-[#C4B5FD] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="px-6 py-4 border-t border-[#E4DFFA] bg-white flex items-center gap-3 shrink-0"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about schemes, eligibility, documents..."
            className="flex-1 px-4 py-2.5 text-sm bg-[#F6F5FF] border border-[#E4DFFA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
          />
          <button
            type="submit"
            disabled={!input.trim() || thinking}
            className="p-2.5 bg-[#6D3FC8] text-white rounded-xl hover:bg-[#5a33a8] disabled:opacity-40 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
