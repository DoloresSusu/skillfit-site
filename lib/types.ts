export type EvidenceLevel = "A" | "B" | "C" | "D" | "Unknown";

export type SafetyLevel = "low" | "medium" | "high" | "unknown";

export type Skill = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  platform: string;
  sourceUrl: string;
  installCommand: string;
  evidenceLevel: EvidenceLevel;
  safetyLevel: SafetyLevel;
  bestFor: string[];
  notFor: string[];
  fitMap: Array<{
    useCaseSlug: string;
    label: "Recommended" | "Consider" | "Not enough data" | "Avoid";
    note: string;
  }>;
};

export type UseCase = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  userIntent: string;
  requiredCapabilities: string[];
  recommendedSkills: string[];
  alternatives: string[];
  avoidWhen: string[];
  testPack: {
    input: string;
    successCriteria: string[];
    failureSignals: string[];
  };
  keywords: string[];
};

export type Arena = {
  slug: string;
  title: string;
  task: string;
  skillA: string;
  skillB: string;
  blindSummaryA: string;
  blindSummaryB: string;
  verdict: string;
  status: "Draft" | "Published";
};

