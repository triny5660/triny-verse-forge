import { SectionHeader } from "@/components/Projects";

const skills = [
  { name: "AI-Leveraged Graphic Design", detail: "Midjourney · Flux · Photoshop · Figma", accent: "cyan" },
  { name: "Web3 Game Development", detail: "NFT games · interactive runners · on-chain mechanics", accent: "magenta" },
  { name: "Real-time Blockchain Dashboards", detail: "Live mainnet data · RPC · indexing", accent: "cyan" },
  { name: "JavaScript, HTML & CSS", detail: "Modern, responsive frontend", accent: "magenta" },
  { name: "Solidity & Rust", detail: "Currently learning · smart contracts", accent: "cyan" },
  { name: "Solana, DeFi & NFTs", detail: "Ecosystem fluency · on-chain UX", accent: "magenta" },
  { name: "Vercel Deployment", detail: "Edge-first hosting & CI/CD", accent: "cyan" },
  { name: "Creative Design & Branding", detail: "Visual identity for NFT communities", accent: "magenta" },
];

const accentVar: Record<string, string> = {
  cyan: "var(--cyan)",
  magenta: "var(--magenta)",
};

export function Skills() {
  return (
    <section id="stack" className="py-28 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="02" title="Tech" highlight="Stack" subtitle="Tools and disciplines I use to ship Web3 products." />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {skills.map((s) => {
            const color = accentVar[s.accent];
            return (
              <div
                key={s.name}
                className="group relative bg-card-gradient border border-border rounded-lg p-5 overflow-hidden hover:border-transparent transition-all"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, color-mix(in oklch, ${color} 10%, transparent), transparent 70%)` }}
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
