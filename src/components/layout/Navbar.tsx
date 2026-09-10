import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E4DFFA]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#6D3FC8] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#1A1826] tracking-tight">Sahayak</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#71697E]">
          <a href="#how-it-works" className="hover:text-[#6D3FC8] transition-colors">How It Works</a>
          <a href="#schemes" className="hover:text-[#6D3FC8] transition-colors">Schemes</a>
          <a href="#about" className="hover:text-[#6D3FC8] transition-colors">About</a>
          <Link to="/login" className="hover:text-[#6D3FC8] transition-colors">Login</Link>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-[#6D3FC8] text-white rounded-lg text-sm font-medium hover:bg-[#5a33a8] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-[#71697E]" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E4DFFA] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#71697E]">
          <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#schemes" onClick={() => setOpen(false)}>Schemes</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <button
            onClick={() => { setOpen(false); navigate("/register"); }}
            className="w-full py-2.5 bg-[#6D3FC8] text-white rounded-lg font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
