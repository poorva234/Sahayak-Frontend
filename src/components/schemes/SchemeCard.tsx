import { useNavigate } from "react-router-dom";
import { ArrowRight, BookmarkPlus, FileText } from "lucide-react";
import type { Scheme } from "../../types/scheme";
import { matchColor, matchBg } from "../../lib/utils";

interface SchemeCardProps {
  scheme: Scheme;
  compact?: boolean;
}

export default function SchemeCard({ scheme, compact = false }: SchemeCardProps) {
  const navigate = useNavigate();
  const pct = scheme.matchPercentage ?? 0;

  return (
    <div className="bg-white rounded-xl border border-[#E4DFFA] p-5 flex flex-col gap-4 hover:shadow-md hover:shadow-[#6D3FC8]/5 hover:border-[#C4B5FD] transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[#71697E] bg-[#F2EFFB] px-2 py-0.5 rounded-md">
              {scheme.category}
            </span>
            {scheme.isCentral && (
              <span className="text-xs font-mono text-[#6D3FC8] bg-[#EDE9FE] px-2 py-0.5 rounded-md">Central</span>
            )}
          </div>
          <h3 className="font-semibold text-[#1A1826] text-sm leading-snug group-hover:text-[#6D3FC8] transition-colors">
            {scheme.name}
          </h3>
          <p className="text-xs text-[#71697E] mt-0.5 truncate">{scheme.department}</p>
        </div>

        {pct > 0 && (
          <div className="flex flex-col items-center shrink-0">
            <div className={`text-lg font-bold font-mono ${matchColor(pct)}`}>{pct}%</div>
            <div className="text-[10px] text-[#71697E] leading-none">match</div>
          </div>
        )}
      </div>

      {/* Match bar */}
      {pct > 0 && (
        <div className="h-1 bg-[#E4DFFA] rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${matchBg(pct)} transition-all duration-700`} style={{ width: `${pct}%` }} />
        </div>
      )}

      {!compact && (
        <p className="text-sm text-[#71697E] leading-relaxed line-clamp-2">{scheme.description}</p>
      )}

      {/* Documents preview */}
      {!compact && scheme.requiredDocuments.length > 0 && (
        <div className="flex items-start gap-2">
          <FileText className="w-3.5 h-3.5 text-[#71697E] mt-0.5 shrink-0" />
          <p className="text-xs text-[#71697E]">
            {scheme.requiredDocuments.slice(0, 3).join(" · ")}
            {scheme.requiredDocuments.length > 3 && ` +${scheme.requiredDocuments.length - 3} more`}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 mt-auto pt-1">
        <button
          onClick={() => navigate(`/schemes/${scheme.id}`)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-[#6D3FC8] border border-[#DDD6FE] rounded-lg hover:bg-[#6D3FC8] hover:text-white hover:border-[#6D3FC8] transition-all duration-200"
        >
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button className="p-2 text-[#71697E] border border-[#E4DFFA] rounded-lg hover:bg-[#F2EFFB] hover:text-[#6D3FC8] transition-colors">
          <BookmarkPlus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
