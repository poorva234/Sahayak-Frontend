import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Brain,
  FileSearch,
  CheckCircle,
  TrendingUp,
  Bell,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SchemeCard from "../components/schemes/SchemeCard";
import { mockSchemes } from "../lib/mockData";

const steps = [
  { num: "01", title: "Create Your Profile", desc: "Share basic details about yourself — income, education, employment, location — to unlock personalised results." },
  { num: "02", title: "AI Eligibility Assessment", desc: "Our AI analyses your profile against hundreds of scheme rules and generates a preliminary eligibility report." },
  { num: "03", title: "Personalised Scheme Matching", desc: "Get a prioritised list of schemes matched to your profile, with eligibility percentages and explanations." },
  { num: "04", title: "Document & Application Assistance", desc: "Upload documents, get AI-guided help filling applications, and submit — all in one place." },
  { num: "05", title: "Track Your Application", desc: "Monitor real-time status updates and receive notifications as your application progresses." },
];

const features = [
  { icon: Brain, title: "Personalised Recommendations", desc: "Schemes matched to your unique profile, not generic lists." },
  { icon: CheckCircle, title: "Eligibility Assessment", desc: "Preliminary AI analysis of your eligibility before you apply." },
  { icon: FileSearch, title: "Document Understanding", desc: "Upload documents once; Sahayak helps verify and reuse them." },
  { icon: Sparkles, title: "Application Assistance", desc: "Step-by-step AI guidance through the application process." },
  { icon: TrendingUp, title: "Application Tracking", desc: "Live status updates for every scheme you have applied to." },
  { icon: Bell, title: "Smart Notifications", desc: "Timely alerts for deadlines, status changes, and new schemes." },
];

const stats = [
  { value: "100+", label: "Welfare Schemes", note: "Central & state" },
  { value: "AI-assisted", label: "Scheme Matching", note: "Profile-based" },
  { value: "Unified", label: "Application Journey", note: "End-to-end" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F5FF]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EDE9FE] rounded-full text-sm text-[#6D3FC8] font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-powered · Citizen-centric · Secure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-5xl lg:text-6xl text-[#1A1826] leading-tight mb-6"
            >
              Discover the Benefits{" "}
              <span className="text-[#6D3FC8]">You're Eligible For.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-[#71697E] leading-relaxed mb-8 max-w-lg"
            >
              Sahayak intelligently connects your profile with public welfare schemes and guides you through the entire application journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => navigate("/register")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#6D3FC8] text-white rounded-xl font-medium hover:bg-[#5a33a8] transition-colors shadow-lg shadow-[#6D3FC8]/20"
              >
                Check My Eligibility <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/schemes")}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#DDD6FE] text-[#6D3FC8] rounded-xl font-medium hover:bg-[#EDE9FE] transition-colors"
              >
                Explore Schemes
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-10"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-bold text-[#1A1826] font-serif">{s.value}</p>
                  <p className="text-xs text-[#71697E]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual — floating network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative h-[480px] hidden lg:flex items-center justify-center"
          >
            {/* Central orb */}
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#6D3FC8] to-[#9B6DFF] shadow-2xl shadow-[#6D3FC8]/30 flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-white/90" />
              <div className="absolute inset-0 rounded-full bg-[#6D3FC8]/10 animate-ping" />
            </div>

            {/* Floating cards */}
            {[
              { label: "Your Profile", sub: "Age · Income · Category", top: "5%", left: "0%" },
              { label: "AI Analysis", sub: "100+ scheme rules", top: "5%", right: "0%" },
              { label: "Eligibility", sub: "94% match found", bottom: "20%", left: "0%" },
              { label: "Apply", sub: "Guided assistance", bottom: "20%", right: "0%" },
            ].map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                className="absolute bg-white border border-[#E4DFFA] rounded-xl px-4 py-3 shadow-lg shadow-[#6D3FC8]/8 w-40"
                style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
              >
                <p className="text-xs font-semibold text-[#1A1826]">{card.label}</p>
                <p className="text-[10px] text-[#71697E] mt-0.5">{card.sub}</p>
                <div className="mt-2 h-1 bg-[#E4DFFA] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6D3FC8] rounded-full" style={{ width: `${65 + i * 10}%` }} />
                </div>
              </motion.div>
            ))}

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <line x1="175" y1="95" x2="260" y2="215" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="325" y1="95" x2="260" y2="215" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="175" y1="335" x2="260" y2="265" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="325" y1="335" x2="260" y2="265" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-[#6D3FC8] mb-3">Process</p>
            <h2 className="font-serif text-4xl text-[#1A1826]">How Sahayak Works</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#E4DFFA] -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center mb-4">
                    <span className="font-mono text-xs font-bold text-[#6D3FC8]">{step.num}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1826] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#71697E] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-[#6D3FC8] mb-3">Platform</p>
            <h2 className="font-serif text-4xl text-[#1A1826]">One Platform. The Complete Journey.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl border border-[#E4DFFA] p-6 hover:border-[#C4B5FD] hover:shadow-md hover:shadow-[#6D3FC8]/5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EDE9FE] flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[#6D3FC8]" />
                </div>
                <h3 className="font-semibold text-[#1A1826] mb-2">{f.title}</h3>
                <p className="text-sm text-[#71697E] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheme preview */}
      <section id="schemes" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#6D3FC8] mb-2">Demo Data</p>
              <h2 className="font-serif text-4xl text-[#1A1826]">Personalised Scheme Preview</h2>
              <p className="text-sm text-[#71697E] mt-2">Sample schemes matched to a demo citizen profile. Demo data only.</p>
            </div>
            <button
              onClick={() => navigate("/schemes")}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#6D3FC8] hover:text-[#5a33a8] transition-colors"
            >
              View all schemes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockSchemes.slice(0, 3).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[#6D3FC8] mb-3">Built Around the Citizen</p>
          <h2 className="font-serif text-4xl text-[#1A1826] mb-6">Serious Technology. Human Purpose.</h2>
          <p className="text-base text-[#71697E] leading-relaxed mb-10">
            Sahayak is a final-year engineering and research project demonstrating how AI can simplify access to public welfare. All eligibility assessments are preliminary — final eligibility is determined by the relevant government authority.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-3xl text-[#6D3FC8] mb-1">{s.value}</p>
                <p className="text-sm font-medium text-[#1A1826]">{s.label}</p>
                <p className="text-xs text-[#71697E]">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#6D3FC8] to-[#8B5CF6] rounded-2xl px-8 py-14 text-white shadow-xl shadow-[#6D3FC8]/20">
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-white/80" />
            <h2 className="font-serif text-3xl mb-4">Find schemes that fit your profile.</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Create your profile in minutes and let Sahayak surface the welfare schemes you may be entitled to.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#6D3FC8] rounded-xl font-semibold hover:bg-[#F6F5FF] transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
