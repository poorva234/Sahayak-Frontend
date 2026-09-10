import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import type { ApplicationTimelineEvent } from "../../types/application";

interface ApplicationTimelineProps {
  events: ApplicationTimelineEvent[];
}

export default function ApplicationTimeline({ events }: ApplicationTimelineProps) {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-3 top-3 bottom-3 w-px bg-[#E4DFFA]" />

      <ol className="space-y-6">
        {events.map((ev, i) => (
          <li key={i} className="relative flex gap-4">
            {/* Dot */}
            <div className="absolute -left-6 flex items-center justify-center w-6 h-6">
              {ev.done && !ev.active ? (
                <CheckCircle2 className="w-5 h-5 text-[#6D3FC8]" />
              ) : ev.active ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#6D3FC8] bg-[#EDE9FE] flex items-center justify-center">
                  <Loader2 className="w-3 h-3 text-[#6D3FC8] animate-spin" />
                </div>
              ) : (
                <Circle className="w-5 h-5 text-[#C4B5FD]" />
              )}
            </div>

            <div className="flex-1 pb-1">
              <div className="flex items-center justify-between gap-4">
                <p className={`text-sm font-semibold ${ev.done ? "text-[#1A1826]" : "text-[#71697E]"}`}>
                  {ev.label}
                </p>
                <span className="text-xs font-mono text-[#71697E] shrink-0">{ev.date}</span>
              </div>
              <p className="text-xs text-[#71697E] mt-0.5">{ev.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
