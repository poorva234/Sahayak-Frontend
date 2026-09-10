export type EmploymentStatus = "Employed" | "Self-Employed" | "Unemployed" | "Student" | "Retired";
export type EducationLevel = "No Formal Education" | "Primary" | "Secondary" | "Diploma" | "Graduate" | "Post-Graduate";
export type IncomeRange = "Below 1 LPA" | "1–2.5 LPA" | "2.5–5 LPA" | "5–10 LPA" | "Above 10 LPA";

export interface CitizenProfile {
  id: string;
  name: string;
  email: string;
  mobile: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  state: string;
  district: string;
  pincode: string;
  educationLevel: EducationLevel;
  isStudent: boolean;
  employmentStatus: EmploymentStatus;
  occupation?: string;
  incomeRange: IncomeRange;
  familySize: number;
  hasDisability: boolean;
  category: "General" | "OBC" | "SC" | "ST";
  completionPercentage: number;
  avatar?: string;
}
