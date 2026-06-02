import { Twitter, Globe, MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-card-gradient border-glow rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-neon-purple/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neon-teal/20 blur-3xl" />

          <div className="relative">
            <span className="font-mono text-neon-teal text-sm">// 04</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-4">
              Let's <span className="text-neon-gradient">Build</span> Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              Open to Web3 opportunities, collaborations, and freelance projects. Drop a message and let's create something on-chain.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <ContactLink href="https://x.com/TrinyDefi" icon={<Twitter className="w-5 h-5" />} label="X / Twitter" value="@TrinyDefi" />
              <ContactLink href="https://trinydefi.xyz" icon={<Globe className="w-5 h-5" />} label="Website" value="trinydefi.xyz" />
              <ContactLink href="mailto:hello@trinydefi.xyz" icon={<Mail className="w-5 h-5" />} label="Email" value="hello@trinydefi.xyz" />
              <ContactLink icon={<MapPin className="w-5 h-5" />} label="Location" value="Lagos, Nigeria · WAT" />
            </div>

            <a
              href="https://x.com/TrinyDefi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-neon-gradient text-primary-foreground font-mono uppercase tracking-wider font-bold hover:scale-105 transition-all shadow-neon-teal"
            >
              <Twitter className="w-4 h-4" /> DM on X
            </a>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© 2026 TRINY · Built on the edge</p>
          <p className="text-neon-teal">// crafted in Lagos 🇳🇬</p>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({
  href, icon, label, value,
}: { href?: string; icon: React.ReactNode; label: string; value: string }) {
  const inner = (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/40 hover:border-neon-teal/50 hover:bg-neon-teal/5 transition-all">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neon-teal/10 text-neon-teal border border-neon-teal/30">{icon}</div>
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
