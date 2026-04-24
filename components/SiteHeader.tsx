import Link from "next/link";

const navItems = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/skills", label: "Skills" },
  { href: "/how-to-choose-ai-skills", label: "Guides" },
  { href: "/arena", label: "Arena" },
  { href: "/submit", label: "Submit" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="SkillFit home">
        <span className="brand-mark">SF</span>
        <span>
          <strong>SkillFit</strong>
          <small>Task-to-Skill Advisor</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
