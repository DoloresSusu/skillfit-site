import type { EvidenceLevel, SafetyLevel } from "@/lib/types";

export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  return <span className={`badge evidence-${level.toLowerCase()}`}>Evidence {level}</span>;
}

export function SafetyBadge({ level }: { level: SafetyLevel }) {
  return <span className={`badge safety-${level}`}>Safety {level}</span>;
}

