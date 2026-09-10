import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sparkles, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState({ pass: false, confirm: false });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", confirm: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-[#F6F5FF]">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-[#6D3FC8] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#1A1826]">Sahayak</span>
        </div>

        <h1 className="font-serif text-3xl text-[#1A1826] mb-2">Create your account</h1>
        <p className="text-sm text-[#71697E] mb-8">
          Join Sahayak to discover welfare schemes you may be eligible for.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", key: "name", type: "text", placeholder: "Priya Sharma" },
            { label: "Email Address", key: "email", type: "email", placeholder: "priya@example.com" },
            { label: "Mobile Number", key: "mobile", type: "tel", placeholder: "+91 98765 43210" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-[#1A1826] mb-1.5">{f.label}</label>
              <input
                type={f.type}
                value={form[f.key as keyof typeof form]}
                onChange={set(f.key as keyof typeof form)}
                placeholder={f.placeholder}
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
                required
              />
            </div>
          ))}

          {[
            { label: "Password", key: "password", visible: show.pass, toggle: () => setShow({ ...show, pass: !show.pass }), placeholder: "Create a strong password" },
            { label: "Confirm Password", key: "confirm", visible: show.confirm, toggle: () => setShow({ ...show, confirm: !show.confirm }), placeholder: "Repeat password" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-sm font-medium text-[#1A1826] mb-1.5">{f.label}</label>
              <div className="relative">
                <input
                  type={f.visible ? "text" : "password"}
                  value={form[f.key as keyof typeof form]}
                  onChange={set(f.key as keyof typeof form)}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-2.5 pr-10 text-sm bg-white border border-[#E4DFFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D3FC8]/30 focus:border-[#6D3FC8] placeholder-[#71697E] text-[#1A1826]"
                  required
                />
                <button type="button" onClick={f.toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71697E]">
                  {f.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}

          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#6D3FC8]"
            />
            <span className="text-sm text-[#71697E]">
              I agree to the{" "}
              <a href="#" className="text-[#6D3FC8] hover:underline">Terms of Use</a>{" "}
              and{" "}
              <a href="#" className="text-[#6D3FC8] hover:underline">Privacy Policy</a>.
              Sahayak does not sell your data.
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed || loading}
            className="w-full py-3 bg-[#6D3FC8] text-white rounded-lg font-medium hover:bg-[#5a33a8] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#71697E]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#6D3FC8] font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
