export type ApplicationStatus =
  | "Draft"
  | "Submitted"
  | "Under Review"
  | "Additional Info Required"
  | "Approved"
  | "Rejected";

export interface ApplicationTimelineEvent {
  date: string;
  label: string;
  description: string;
  done: boolean;
  active?: boolean;
}

export interface Application {
  id: string;
  schemeId: string;
  schemeName: string;
  department: string;
  submittedDate?: string;
  lastUpdated: string;
  status: ApplicationStatus;
  referenceNumber?: string;
  timeline: ApplicationTimelineEvent[];
  attachedDocuments: string[];
  remarks?: string;
}
