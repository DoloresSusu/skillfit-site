import Link from "next/link";
import { HeaderNav } from "@/components/HeaderNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="SkillFit home">
        <span className="brand-mark">SF</span>
        <span>
          <strong>SkillFit</strong>
          <small>Task-fit Skill Advisor</small>
        </span>
      </Link>
      <HeaderNav />
    </header>
  );
}
