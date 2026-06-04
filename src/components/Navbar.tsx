import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <Terminal className="w-5 h-5 text-cyan" />
          <span className="text-foreground">triny</span>
          <span className="text-cyan animate-blink">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-cyan transition-colors duration-200 font-mono"
              >
                <span className="text-cyan/40 group-hover:text-cyan transition-colors">/</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-cyan/40 text-cyan text-xs font-mono uppercase tracking-wider hover:bg-cyan/10 hover:shadow-cyan transition-all"
        >
          ./hire-me
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground hover:text-cyan hover:border-cyan/40 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 text-sm font-mono text-muted-foreground hover:text-cyan transition-colors"
                >
                  <span className="text-cyan/40">/</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-md border border-cyan/40 text-cyan text-xs font-mono uppercase tracking-wider"
              >
                ./hire-me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
