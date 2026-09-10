export type DocumentStatus = "Verified" | "Needs Review" | "Processing" | "Uploaded";
export type DocumentType =
  | "Identity Proof"
  | "Address Proof"
  | "Income Certificate"
  | "Education Certificate"
  | "Caste Certificate"
  | "Bank Statement"
  | "Photograph"
  | "Other";

export interface CitizenDocument {
  id: string;
  name: string;
  type: DocumentType;
  uploadDate: string;
  status: DocumentStatus;
  fileSize: string;
  fileType: "PDF" | "JPG" | "PNG";
  extractedFields?: ExtractedField[];
}

export interface ExtractedField {
  label: string;
  value: string;
  confidence: number;
}
