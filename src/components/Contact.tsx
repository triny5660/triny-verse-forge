import { Twitter, Globe, MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-card-gradient border-glow rounded-2xl p-8 md:p-16 overflow-hidden scanlines">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-magenta/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan/15 blur-3xl" />

          <div className="relative">
            <p className="font-mono text-cyan text-sm mb-2">{"// 04 — let's connect"}</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Let&apos;s <span className="text-duo-gradient">Build</span> Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              Open to Web3 opportunities, collaborations, and freelance projects. Drop a message and let&apos;s create something on-chain.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <ContactLink href="https://x.com/TrinyDefi" icon={<Twitter className="w-5 h-5" />} label="x / twitter" value="@TrinyDefi" />
              <ContactLink href="https://trinydefi.xyz" icon={<Globe className="w-5 h-5" />} label="website" value="trinydefi.xyz" />
              <ContactLink href="mailto:hello@trinydefi.xyz" icon={<Mail className="w-5 h-5" />} label="email" value="hello@trinydefi.xyz" />
              <ContactLink icon={<MapPin className="w-5 h-5" />} label="location" value="Lagos, Nigeria · WAT" />
            </div>

            <a
              href="https://x.com/TrinyDefi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-cyan-gradient text-primary-foreground font-mono uppercase tracking-wider font-bold hover:shadow-cyan transition-all"
            >
              <Twitter className="w-4 h-4" /> dm on x
            </a>
          </div>
        </div>

        <footer className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© 2026 TRINY · built on the edge</p>
          <p className="text-cyan">{"// crafted in Lagos, NG"}</p>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({
  href, icon, label, value,
}: { href?: string; icon: React.ReactNode; label: string; value: string }) {
  const inner = (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background/40 hover:border-cyan/50 hover:bg-cyan/5 transition-all">
      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-cyan/10 text-cyan border border-cyan/30">{icon}</div>
      <div>
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : inner;
}
