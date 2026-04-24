import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>SkillFit</strong>
        <p>Find the right AI Agent Skill for a concrete task.</p>
      </div>
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/guides">Guides</Link>
        <Link href="/llms.txt">llms.txt</Link>
        <Link href="/submit">Submit a Skill</Link>
        <Link href="/arena">Arena</Link>
      </div>
    </footer>
  );
}
