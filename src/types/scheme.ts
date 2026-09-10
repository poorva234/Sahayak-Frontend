export type SchemeCategory =
  | "Agriculture"
  | "Education"
  | "Health"
  | "Housing"
  | "Employment"
  | "Women & Child"
  | "Senior Citizens"
  | "Disability"
  | "SC/ST/OBC"
  | "Financial Inclusion";

export interface Scheme {
  id: string;
  name: string;
  department: string;
  ministry: string;
  category: SchemeCategory;
  description: string;
  benefits: string[];
  eligibilityCriteria: EligibilityCriterion[];
  requiredDocuments: string[];
  applicationProcess: string[];
  importantInfo: string;
  lastDate?: string;
  matchPercentage?: number;
  state: string;
  isCentral: boolean;
  tags: string[];
}

export interface EligibilityCriterion {
  label: string;
  value: string;
  met?: boolean;
  needsVerification?: boolean;
}
