import { ArrowUpRight, Gamepad2, Activity } from "lucide-react";

const projects = [
  {
    title: "Pharos Speedometer",
    type: "Real-time Blockchain Dashboard",
    year: "2026",
    description: "Live dashboard streaming real-time mainnet data for the Pharos blockchain.",
    link: "https://pharos-speedometer.vercel.app/",
    tag: "dashboard",
    icon: <Activity className="w-5 h-5" />,
    accent: "cyan",
  },
  {
    title: "Unipix Dash",
    type: "Web Game · NFT Project",
    year: "2026",
    description: "An engaging web-based arcade game built for the Unipix NFT community.",
    link: "https://unipix-dash-six.vercel.app/",
    tag: "nft_game",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "magenta",
  },
  {
    title: "Degen Dash Game",
    type: "Web Game · NFT Project",
    year: "2026",
    description: "A fast, addictive endless-runner crafted for the Degen NFT project.",
    link: "https://degen-dash-game.vercel.app/",
    tag: "endless_runner",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "magenta",
  },
  {
    title: "Shellmates Runner — Neon Rush",
    type: "Web Game · NFT Project",
    year: "2026",
    description: "A high-speed neon runner created for the Shellmates NFT ecosystem.",
    link: "https://shellmates-runner-neon-rush.vercel.app/",
    tag: "neon_runner",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "cyan",
  },
];

const accentVar: Record<string, string> = {
  cyan: "var(--cyan)",
  magenta: "var(--magenta)",
};

export function Projects() {
  return (
    <section id="work" className="py-28 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader index="01" title="Featured" highlight="Deploys" subtitle="Selected work across Web3 dashboards and NFT gaming." />

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {projects.map((p) => {
            const color = accentVar[p.accent];
            return (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card-gradient border border-border rounded-lg p-7 overflow-hidden hover:-translate-y-1 hover:border-transparent transition-all duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, color-mix(in oklch, ${color} 18%, transparent), transparent 60%)` }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />

                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-md flex items-center justify-center border"
                    style={{ borderColor: `color-mix(in oklch, ${color} 40%, transparent)`, background: `color-mix(in oklch, ${color} 12%, transparent)`, color }}
                  >
                    {p.icon}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>

                <span className="relative inline-block font-mono text-xs lowercase tracking-wider mb-3 px-2 py-0.5 rounded" style={{ background: `color-mix(in oklch, ${color} 12%, transparent)`, color }}>
                  #{p.tag}
                </span>

                <h3 className="relative text-2xl font-display font-bold mb-1 text-foreground">{p.title}</h3>
                <p className="relative text-xs font-mono uppercase tracking-wider mb-4" style={{ color }}>{p.type}</p>
                <p className="relative text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                <div className="relative flex items-center gap-1.5 font-mono text-sm lowercase tracking-wider group-hover:gap-2.5 transition-all" style={{ color }}>
                  view_live <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  index, title, highlight, subtitle,
}: { index: string; title: string; highlight: string; subtitle: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-cyan text-sm">{`// ${index}`}</span>
        <span className="h-px flex-1 max-w-24 bg-border" />
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold">
        {title} <span className="text-duo-gradient">{highlight}</span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl font-mono text-sm">{subtitle}</p>
    </div>
  );
}
