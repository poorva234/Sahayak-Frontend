import type { ApplicationStatus } from "../types/application";
import type { DocumentStatus } from "../types/document";

export function formatDate(isoString: string): string {
  if (isoString === "—") return "—";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function timeAgo(isoString: string): string {
  const now = new Date();
  const then = new Date(isoString);
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function statusColor(status: ApplicationStatus): string {
  const map: Record<ApplicationStatus, string> = {
    Draft: "bg-[#F2EFFB] text-[#71697E]",
    Submitted: "bg-blue-50 text-blue-700",
    "Under Review": "bg-amber-50 text-amber-700",
    "Additional Info Required": "bg-orange-50 text-orange-700",
    Approved: "bg-emerald-50 text-emerald-700",
    Rejected: "bg-red-50 text-red-700",
  };
  return map[status] ?? "bg-gray-100 text-gray-600";
}

export function docStatusColor(status: DocumentStatus): string {
  const map: Record<DocumentStatus, string> = {
    Verified: "bg-emerald-50 text-emerald-700",
    "Needs Review": "bg-red-50 text-red-700",
    Processing: "bg-amber-50 text-amber-700",
    Uploaded: "bg-blue-50 text-blue-700",
  };
  return map[status] ?? "bg-gray-100 text-gray-600";
}

export function matchColor(pct: number): string {
  if (pct >= 85) return "text-emerald-600";
  if (pct >= 65) return "text-amber-600";
  return "text-red-500";
}

export function matchBg(pct: number): string {
  if (pct >= 85) return "bg-emerald-500";
  if (pct >= 65) return "bg-amber-400";
  return "bg-red-400";
}
