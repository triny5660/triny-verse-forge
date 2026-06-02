export function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-bold text-neon-gradient">
          TRINY<span className="text-neon-teal">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-neon-teal transition-colors duration-300 font-mono uppercase tracking-wider"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-md border border-neon-teal/40 text-neon-teal text-xs font-mono uppercase tracking-wider hover:bg-neon-teal/10 hover:shadow-neon-teal transition-all"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
