import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sparkles, Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#6D3FC8] to-[#8B5CF6] p-12 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -right-16 w-80 h-80 bg-white/5 rounded-full" />

        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">Sahayak</span>
        </div>

        <div className="relative z-10">
          <h2 className="font-serif text-4xl leading-tight mb-4">
            Your gateway to public welfare, simplified.
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-sm">
            Sign in to access personalised scheme recommendations, track your applications, and get AI-assisted guidance.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {["100+ Schemes", "AI Matching", "Secure"].map((t) => (
              <div key={t} className="bg-white/10 rounded-lg px-3 py-3 text-center">
                <p className="text-xs font-medium text-white/90">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-xs text-white/50">
          Demo project · Not affiliated with any government agency
        </p>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-8 bg-[#F6F5FF]">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#6D3FC8] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-[#1A1826]">Sahayak</span>
          </div>

          <h1 className="font-serif text-3xl text-[#1A1826] mb-2">Welcome back</h1>
          <p className="text-sm text-[#71697E] mb-8">Sign in to your Sahayak account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1A1826] mb-1.5">Email or Mobile</label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com or 98765 43210"
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1826] mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-10 text-sm bg-white border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71697E] hover:text-[#1A1826] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="w-4 h-4 accent-[#6D3FC8]"
                />
                <span className="text-sm text-[#71697E]">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[#6D3FC8] hover:underline">Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#6D3FC8] text-white rounded-lg font-medium hover:bg-[#5a33a8] disabled:opacity-60 transition-all"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><LogIn className="w-4 h-4" /> Sign In</>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#71697E]">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#6D3FC8] font-medium hover:underline">Create one</Link>
          </p>

          <p className="mt-8 text-center text-xs text-[#71697E]">
            Demo: enter any credentials to continue
          </p>
        </div>
      </div>
    </div>
  );
}
