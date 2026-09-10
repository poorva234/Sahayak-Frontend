import { useState } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, Eye } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { mockDocuments } from "../lib/mockData";
import { docStatusColor } from "../lib/utils";
import type { CitizenDocument } from "../types/document";

function OCRPreview({ doc }: { doc: CitizenDocument }) {
  if (!doc.extractedFields) return null;
  return (
    <div className="mt-4 border-t border-[#E4DFFA] pt-4">
      <p className="text-xs font-semibold text-[#1A1826] mb-3">Extracted Information (OCR Preview)</p>
      <div className="grid grid-cols-2 gap-2">
        {doc.extractedFields.map((f) => (
          <div key={f.label} className="bg-[#F6F5FF] rounded-lg px-3 py-2">
            <p className="text-[10px] text-[#71697E] uppercase tracking-wide">{f.label}</p>
            <p className="text-xs font-medium text-[#1A1826] mt-0.5">{f.value}</p>
            <div className="mt-1.5 h-1 bg-[#E4DFFA] rounded-full overflow-hidden">
              <div className="h-full bg-[#6D3FC8] rounded-full" style={{ width: `${f.confidence * 100}%` }} />
            </div>
            <p className="text-[9px] text-[#71697E] mt-0.5 font-mono">{Math.round(f.confidence * 100)}% confidence</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-[#71697E] mt-3">OCR extraction is for guidance only. Verify all information before submission.</p>
    </div>
  );
}

export default function DocumentsPage() {
  const [docs, setDocs] = useState(mockDocuments);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    // Placeholder: actual upload handled by api.ts
  };

  const statusIcon = (status: CitizenDocument["status"]) => {
    if (status === "Verified") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    if (status === "Needs Review") return <AlertCircle className="w-4 h-4 text-red-500" />;
    if (status === "Processing") return <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />;
    return <FileText className="w-4 h-4 text-blue-500" />;
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-serif text-3xl text-[#1A1826]">Your Documents</h1>
          <p className="text-sm text-[#71697E] mt-1">Upload and manage documents for scheme applications.</p>
        </div>

        {/* Upload area */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
            dragging ? "border-[#6D3FC8] bg-[#EDE9FE]" : "border-[#C4B5FD] bg-white hover:bg-[#F6F5FF]"
          }`}
        >
          <Upload className="w-8 h-8 text-[#6D3FC8] mx-auto mb-3" />
          <p className="text-sm font-medium text-[#1A1826] mb-1">Drag & drop your document here</p>
          <p className="text-xs text-[#71697E] mb-4">Supports PDF, JPG, PNG · Max 5 MB per file</p>
          <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#6D3FC8] text-white rounded-xl text-sm font-medium hover:bg-[#5a33a8] transition-colors">
            <Upload className="w-4 h-4" /> Choose File
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
          </label>
        </div>

        {/* Document list */}
        <div>
          <h2 className="text-sm font-semibold text-[#1A1826] mb-4">Uploaded Documents</h2>
          <div className="space-y-3">
            {docs.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl border border-[#E4DFFA] overflow-hidden">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F2EFFB] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#6D3FC8]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1826]">{doc.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#71697E]">{doc.type}</span>
                        <span className="text-xs text-[#71697E]">·</span>
                        <span className="text-xs font-mono text-[#71697E]">{doc.fileSize}</span>
                        <span className="text-xs text-[#71697E]">·</span>
                        <span className="text-xs text-[#71697E]">{doc.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {statusIcon(doc.status)}
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${docStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                    {doc.extractedFields && (
                      <button
                        onClick={() => setExpanded(expanded === doc.id ? null : doc.id)}
                        className="p-1.5 text-[#71697E] hover:text-[#6D3FC8] hover:bg-[#F2EFFB] rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                {expanded === doc.id && (
                  <div className="px-4 pb-4">
                    <OCRPreview doc={doc} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#71697E] text-center">
          Documents are stored securely. OCR processing is performed by the backend AI service (not yet connected in this demo).
        </p>
      </div>
    </DashboardLayout>
  );
}
