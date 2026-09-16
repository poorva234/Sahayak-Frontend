import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  HeartPulse,
  Landmark,
  Home,
  Cpu,
  Hammer,
  Sparkles,
  Coins,
  Users,
  BadgeCheck,
  Receipt,
  Sun,
  Rocket,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

interface SchemeNode {
  id: string;
  name: string;
  dept: string;
  category: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  // Polar positioning (angle in deg, radius in px) for balanced layout
  angle: number;
  radius: number;
  direction: number; // 1 or -1 for floating phase
}

const SCHEMES: SchemeNode[] = [
  {
    id: "pmkisan",
    name: "PM-Kisan",
    dept: "Min. of Agriculture",
    category: "Direct Income",
    icon: Sprout,
    color: "#10B981",
    bgColor: "#ECFDF5",
    borderColor: "#A7F3D0",
    angle: 15,
    radius: 240,
    direction: 1,
  },
  {
    id: "ayushman",
    name: "Ayushman Bharat",
    dept: "National Health Authority",
    category: "Healthcare ₹5L",
    icon: HeartPulse,
    color: "#EF4444",
    bgColor: "#FEF2F2",
    borderColor: "#FECACA",
    angle: 45,
    radius: 200,
    direction: -1,
  },
  {
    id: "incometax",
    name: "Income Tax Dept",
    dept: "CBDT / Finance",
    category: "Tax Refunds",
    icon: Landmark,
    color: "#6366F1",
    bgColor: "#EEF2FF",
    borderColor: "#C7D2FE",
    angle: 75,
    radius: 260,
    direction: 1,
  },
  {
    id: "pmay",
    name: "PM Awas Yojana",
    dept: "Min. of Housing",
    category: "Housing Subsidy",
    icon: Home,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    angle: 110,
    radius: 210,
    direction: -1,
  },
  {
    id: "digitalindia",
    name: "Digital India",
    dept: "MeitY",
    category: "e-Governance",
    icon: Cpu,
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    borderColor: "#BAE6FD",
    angle: 140,
    radius: 250,
    direction: 1,
  },
  {
    id: "vishwakarma",
    name: "PM Vishwakarma",
    dept: "Min. of MSME",
    category: "Artisan Credit",
    icon: Hammer,
    color: "#EA580C",
    bgColor: "#FFF7ED",
    borderColor: "#FFEDD5",
    angle: 170,
    radius: 215,
    direction: -1,
  },
  {
    id: "sukanya",
    name: "Sukanya Samriddhi",
    dept: "Dept. of Posts",
    category: "Girl Child Savings",
    icon: Sparkles,
    color: "#EC4899",
    bgColor: "#FDF2F8",
    borderColor: "#FBCFE8",
    angle: 200,
    radius: 255,
    direction: 1,
  },
  {
    id: "mudra",
    name: "Mudra Yojana",
    dept: "PMMY / Finance",
    category: "MSME Loans",
    icon: Coins,
    color: "#14B8A6",
    bgColor: "#F0FDFA",
    borderColor: "#99F6E4",
    angle: 230,
    radius: 205,
    direction: -1,
  },
  {
    id: "mgnrega",
    name: "MGNREGA",
    dept: "Min. of Rural Dev.",
    category: "Wage Guarantee",
    icon: Users,
    color: "#84CC16",
    bgColor: "#F7FEE7",
    borderColor: "#D9F99D",
    angle: 260,
    radius: 260,
    direction: 1,
  },
  {
    id: "eshram",
    name: "e-Shram Portal",
    dept: "Min. of Labour",
    category: "Social Security",
    icon: BadgeCheck,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    angle: 290,
    radius: 215,
    direction: -1,
  },
  {
    id: "gst",
    name: "GST Portal",
    dept: "CBIC / Indirect Tax",
    category: "Invoicing & Return",
    icon: Receipt,
    color: "#475569",
    bgColor: "#F8FAFC",
    borderColor: "#E2E8F0",
    angle: 320,
    radius: 250,
    direction: 1,
  },
  {
    id: "suryaghar",
    name: "PM Surya Ghar",
    dept: "Min. of NRE",
    category: "Solar Subsidy",
    icon: Sun,
    color: "#D97706",
    bgColor: "#FEF3C7",
    borderColor: "#FDE68A",
    angle: 345,
    radius: 210,
    direction: -1,
  },
];

export default function GovernmentSchemesNetwork() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Center coordinate in container (600x520)
  const cx = 300;
  const cy = 260;

  return (
    <div className="relative w-full h-[540px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-gradient-to-b from-[#F9F8FF] to-[#F1EEFF] border border-[#E4DFFA]/80 shadow-inner">
      {/* Background Radial Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#6D3FC8]/10 blur-3xl pointer-events-none" />

      {/* Outer Orbit Guide Rings */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-[#DDD6FE]/60 pointer-events-none animate-[spin_120s_linear_infinite]" />
      <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[#C4B5FD]/40 pointer-events-none animate-[spin_90s_linear_infinite_reverse]" />

      {/* SVG Connection Beams & Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6D3FC8" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6D3FC8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {SCHEMES.map((scheme) => {
          const rad = (scheme.angle * Math.PI) / 180;
          const nodeX = cx + scheme.radius * Math.cos(rad);
          const nodeY = cy + scheme.radius * Math.sin(rad);
          const isHovered = hoveredNode === scheme.id;

          return (
            <g key={`beam-${scheme.id}`}>
              {/* Static Connecting Line */}
              <line
                x1={cx}
                y1={cy}
                x2={nodeX}
                y2={nodeY}
                stroke={isHovered ? scheme.color : "#DDD6FE"}
                strokeWidth={isHovered ? 2.5 : 1.2}
                strokeDasharray={isHovered ? "none" : "4 4"}
                opacity={isHovered ? 0.9 : 0.6}
                className="transition-all duration-300"
              />

              {/* Inward / Outward Flowing Particle Line */}
              <line
                x1={cx}
                y1={cy}
                x2={nodeX}
                y2={nodeY}
                stroke={scheme.color}
                strokeWidth={isHovered ? 3 : 2}
                strokeDasharray="6 18"
                opacity={isHovered ? 1 : 0.75}
                style={{
                  animation: `dashFlow ${3 + (scheme.angle % 3)}s linear infinite ${
                    scheme.direction === 1 ? "normal" : "reverse"
                  }`,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Central Sahayak AI Orb / Hub (Marked Circle) */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#6D3FC8] via-[#7C3AED] to-[#9B6DFF] p-1 shadow-2xl shadow-[#6D3FC8]/40 flex flex-col items-center justify-center cursor-pointer group"
      >
        {/* Ripple Effect */}
        <div className="absolute -inset-3 rounded-full bg-[#6D3FC8]/15 animate-ping pointer-events-none" />
        <div className="absolute -inset-6 rounded-full bg-[#8B5CF6]/10 animate-pulse pointer-events-none" />

        <div className="w-full h-full rounded-full bg-[#5B21B6]/30 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center border border-white/20 text-white">
          <div className="relative mb-1">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/25 shadow-inner">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <ShieldCheck className="w-4 h-4 text-emerald-300 absolute -bottom-0.5 -right-0.5 bg-[#5B21B6] rounded-full" />
          </div>

          <span className="font-semibold text-sm tracking-tight text-white drop-shadow-sm">
            Sahayak AI Hub
          </span>
          <span className="text-[10px] text-purple-200/90 font-mono mt-0.5">
            14+ Govt Depts Live
          </span>

          <div className="mt-1.5 px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-[9px] text-emerald-200 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            AI Document Engine
          </div>
        </div>
      </motion.div>

      {/* Floating Indian Scheme Department Badges / Logos */}
      {SCHEMES.map((scheme, idx) => {
        const rad = (scheme.angle * Math.PI) / 180;
        // Base polar offsets relative to center
        const baseX = Math.cos(rad) * scheme.radius;
        const baseY = Math.sin(rad) * scheme.radius;

        // Inward & Outward Dynamic Floating Vector
        // Moves toward center (-0.25 offset) and outward (+0.15 offset)
        const targetX = Math.cos(rad) * (scheme.radius - 35 * scheme.direction);
        const targetY = Math.sin(rad) * (scheme.radius - 35 * scheme.direction);

        const IconComponent = scheme.icon;
        const isHovered = hoveredNode === scheme.id;

        return (
          <motion.div
            key={scheme.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: [baseX, targetX, baseX],
              y: [baseY, targetY, baseY],
              scale: isHovered ? 1.12 : 1,
            }}
            transition={{
              x: {
                duration: 4.5 + (idx % 4) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              },
              y: {
                duration: 4.5 + (idx % 4) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              },
              scale: { duration: 0.2 },
            }}
            onMouseEnter={() => setHoveredNode(scheme.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute z-30 cursor-pointer"
            style={{
              left: `calc(50% + ${baseX}px - 70px)`,
              top: `calc(50% + ${baseY}px - 24px)`,
            }}
          >
            <div
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-300 shadow-md ${
                isHovered
                  ? "shadow-xl ring-2 scale-105 z-40 bg-white"
                  : "bg-white/95 backdrop-blur-sm"
              }`}
              style={{
                borderColor: isHovered ? scheme.color : scheme.borderColor,
                boxShadow: isHovered
                  ? `0 10px 25px -5px ${scheme.color}40`
                  : "0 4px 12px rgba(109, 63, 200, 0.08)",
              }}
            >
              {/* Official Icon Badge */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ backgroundColor: scheme.bgColor, color: scheme.color }}
              >
                <IconComponent className="w-4 h-4" />
              </div>

              {/* Scheme Details */}
              <div className="flex flex-col text-left leading-tight pr-1">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1A1826] tracking-tight">
                    {scheme.name}
                  </span>
                </div>
                <span className="text-[9.5px] font-medium text-[#71697E] truncate max-w-[100px]">
                  {scheme.dept}
                </span>
                <span
                  className="text-[8.5px] font-semibold mt-0.5 px-1.5 py-0.2 rounded-full inline-block w-max"
                  style={{ backgroundColor: scheme.bgColor, color: scheme.color }}
                >
                  {scheme.category}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Inline Keyframe Styles for SVG Flowing Dashes */}
      <style>{`
        @keyframes dashFlow {
          0% {
            stroke-dashoffset: 48;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
