const skills = [
  { name: "AI-Leveraged Graphic Design", detail: "Midjourney · Flux · Photoshop · Figma", accent: "teal" },
  { name: "Web3 Game Development", detail: "NFT games, interactive runners, on-chain mechanics", accent: "purple" },
  { name: "Real-time Blockchain Dashboards", detail: "Live mainnet data, RPC, indexing", accent: "blue" },
  { name: "JavaScript, HTML, CSS", detail: "Modern frontend, responsive UI", accent: "teal" },
  { name: "Solidity & Rust", detail: "Currently learning · smart contracts", accent: "pink" },
  { name: "Solana, DeFi & NFTs", detail: "Ecosystem fluency · on-chain UX", accent: "purple" },
  { name: "Vercel Deployment", detail: "Edge-first hosting & CI/CD", accent: "blue" },
  { name: "Creative Design & Branding", detail: "Visual identity for NFT communities", accent: "pink" },
];

const accentMap: Record<string, string> = {
  teal: "var(--neon-teal)",
  purple: "var(--neon-purple)",
  pink: "var(--neon-pink)",
  blue: "var(--neon-blue)",
};

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-neon-teal text-sm">// 03</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Skills & <span className="text-neon-gradient">Tech Stack</span></h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">Tools and disciplines I use to ship Web3 products.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s) => {
            const color = accentMap[s.accent];
            return (
              <div
                key={s.name}
                className="group relative bg-card-gradient border border-border rounded-xl p-5 overflow-hidden hover:border-transparent transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${color}10, transparent 70%)` }}
                />
                <div className="relative flex items-center gap-3 mb-1">
                  <span className="w-1.5 h-6 rounded-full" style={{ background: color, boxShadow: `0 0 12px ${color}` }} />
                  <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                </div>
                <p className="relative text-sm text-muted-foreground font-mono pl-5">{s.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
