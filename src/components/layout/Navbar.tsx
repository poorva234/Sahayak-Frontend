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
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6D3FC8] via-[#7C3AED] to-[#9B6DFF] p-0.5 shadow-md shadow-[#6D3FC8]/20 flex items-center justify-center transition-transform group-hover:scale-105">
            {/* If custom logo image logo.svg or logo.png is present in public/ or assets, render image. Otherwise render Ashoka Chakra / Sahayak Emblem */}
            <div className="w-full h-full rounded-[10px] bg-[#6D3FC8] flex items-center justify-center overflow-hidden">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" fillOpacity="0.2" />
                <circle cx="12" cy="12" r="3" fill="white" />
                <path d="M12 5V7M12 17V19M5 12H7M17 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-[#1A1826] tracking-tight group-hover:text-[#6D3FC8] transition-colors">
              Sahayak
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-[#71697E] uppercase">
              Govt Welfare AI
            </span>
          </div>
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
