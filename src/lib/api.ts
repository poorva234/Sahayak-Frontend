// API service layer — replace mock implementations with REST calls to Spring Boot backend
// Base URL: process.env.NEXT_PUBLIC_API_URL or import.meta.env.VITE_API_URL

import {
  mockSchemes,
  mockProfile,
  mockDocuments,
  mockApplications,
  mockNotifications,
} from "./mockData";
import type { Scheme } from "../types/scheme";
import type { CitizenProfile } from "../types/citizen";
import type { CitizenDocument } from "../types/document";
import type { Application } from "../types/application";
import type { Notification } from "../types/notification";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// GET /api/schemes
export async function fetchSchemes(): Promise<Scheme[]> {
  await delay(600);
  return mockSchemes;
}

// GET /api/schemes/:id
export async function fetchSchemeById(id: string): Promise<Scheme | undefined> {
  await delay(400);
  return mockSchemes.find((s) => s.id === id);
}

// GET /api/citizen/profile
export async function fetchProfile(): Promise<CitizenProfile> {
  await delay(400);
  return mockProfile;
}

// PUT /api/citizen/profile
export async function updateProfile(data: Partial<CitizenProfile>): Promise<CitizenProfile> {
  await delay(800);
  return { ...mockProfile, ...data };
}

// GET /api/documents
export async function fetchDocuments(): Promise<CitizenDocument[]> {
  await delay(500);
  return mockDocuments;
}

// POST /api/documents
export async function uploadDocument(file: File, type: string): Promise<CitizenDocument> {
  await delay(1500);
  return {
    id: `doc-${Date.now()}`,
    name: file.name,
    type: type as CitizenDocument["type"],
    uploadDate: new Date().toISOString().split("T")[0],
    status: "Processing",
    fileSize: `${(file.size / 1024).toFixed(0)} KB`,
    fileType: file.name.endsWith(".pdf") ? "PDF" : "JPG",
  };
}

// GET /api/applications
export async function fetchApplications(): Promise<Application[]> {
  await delay(500);
  return mockApplications;
}

// GET /api/applications/:id
export async function fetchApplicationById(id: string): Promise<Application | undefined> {
  await delay(400);
  return mockApplications.find((a) => a.id === id);
}

// POST /api/applications
export async function createApplication(schemeId: string): Promise<Application> {
  await delay(1000);
  const scheme = mockSchemes.find((s) => s.id === schemeId);
  return {
    id: `app-${Date.now()}`,
    schemeId,
    schemeName: scheme?.name ?? "Unknown Scheme",
    department: scheme?.department ?? "",
    lastUpdated: new Date().toISOString(),
    status: "Draft",
    timeline: [
      { date: new Date().toLocaleDateString("en-IN"), label: "Application Created", description: "Draft started", done: true, active: true },
      { date: "—", label: "Documents Submitted", description: "Pending", done: false },
      { date: "—", label: "Application Submitted", description: "Pending", done: false },
      { date: "—", label: "Under Review", description: "Pending", done: false },
      { date: "—", label: "Decision", description: "Pending", done: false },
    ],
    attachedDocuments: [],
  };
}

// GET /api/notifications
export async function fetchNotifications(): Promise<Notification[]> {
  await delay(300);
  return mockNotifications;
}

// PUT /api/notifications/:id/read
export async function markNotificationRead(id: string): Promise<void> {
  await delay(200);
  // backend call placeholder
}
