import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

const suggestions = [
  "Find schemes for me",
  "Check my eligibility",
  "What documents do I need?",
  "Explain PM Vishwakarma",
];

const mockResponses: Record<string, string> = {
  "find schemes for me":
    "Based on your profile — OBC category, self-employed artisan, income below ₹2.5 LPA — here are the top matches:\n\n• PM Vishwakarma Yojana (94% match) — credit & skill support for artisans\n• PMKVY 4.0 (88% match) — free skill certification\n• PM Awas Yojana (81% match) — housing subsidy\n\nWould you like to start an eligibility check for any of these?",
  "check my eligibility":
    "I can run a preliminary assessment using your saved profile. Based on your current information:\n\n✓ Age & category criteria — met for most schemes\n✓ Income range — qualifies for EWS/LIG housing schemes\n⚠ Employment type needs verification for some schemes\n\nFor a detailed report, visit the Eligibility page.",
  "what documents do i need?":
    "For most welfare scheme applications, you will need:\n\n1. Aadhaar Card (identity & address)\n2. Income Certificate (from Tehsildar/SDM)\n3. Caste Certificate (for OBC/SC/ST schemes)\n4. Bank passbook/statement\n5. Ration Card or Family ID\n\nYour Aadhaar and Income Certificate are already uploaded and verified. Your Caste Certificate needs re-upload.",
  "explain pm vishwakarma":
    "PM Vishwakarma Yojana is a central government scheme supporting traditional artisans and craftspeople.\n\nKey benefits:\n• Collateral-free credit up to ₹3 lakh at 5% interest\n• ₹15,000 toolkit grant\n• ₹500/day stipend during skill training\n• PM Vishwakarma certificate\n\nYour profile shows a 94% match. You can apply at the nearest Common Service Centre (CSC).",
};

function getResponse(input: string): string {
  const key = Object.keys(mockResponses).find((k) => input.toLowerCase().includes(k.split(" ")[0]));
  return (
    key ? mockResponses[key] : "I can help you find schemes, check eligibility, understand documents, or explain any scheme in detail. Could you please clarify your question?"
  );
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: "Hello! I'm Sahayak's assistant. I can help you find relevant schemes, check your eligibility, or understand what documents you need." },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    await new Promise((r) => setTimeout(r, 900));
    const reply = getResponse(text);
    setMessages((m) => [...m, { id: Date.now() + 1, role: "assistant", text: reply }]);
    setThinking(false);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#6D3FC8] text-white rounded-full shadow-xl shadow-[#6D3FC8]/30 flex items-center justify-center hover:bg-[#5a33a8] hover:scale-105 transition-all duration-200"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-h-[560px] bg-white rounded-2xl shadow-2xl shadow-[#6D3FC8]/15 border border-[#E4DFFA] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#6D3FC8] text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">Sahayak Assistant</p>
                <p className="text-xs text-white/70 leading-tight">AI-powered · Demo responses</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[#6D3FC8] text-white rounded-br-sm"
                      : "bg-[#F2EFFB] text-[#1A1826] rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start">
                <div className="bg-[#F2EFFB] rounded-xl rounded-bl-sm px-3.5 py-2.5 flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#6D3FC8] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-2.5 py-1 bg-[#EDE9FE] text-[#6D3FC8] rounded-full hover:bg-[#DDD6FE] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 px-3 py-3 border-t border-[#E4DFFA]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 text-sm px-3 py-2 bg-[#F6F5FF] border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              className="p-2 bg-[#6D3FC8] text-white rounded-lg hover:bg-[#5a33a8] disabled:opacity-40 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
