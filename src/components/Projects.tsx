import { ExternalLink, Gamepad2, Activity } from "lucide-react";

const projects = [
  {
    title: "Pharos Speedometer",
    type: "Real-time Blockchain Dashboard",
    year: "2026",
    description: "Live dashboard displaying real-time mainnet data for the Pharos blockchain.",
    link: "https://pharos-speedometer.vercel.app/",
    tag: "Dashboard",
    icon: <Activity className="w-5 h-5" />,
    accent: "teal",
  },
  {
    title: "Unipix Dash",
    type: "Web Game for NFT Project",
    year: "2026",
    description: "Engaging web-based game built for the Unipix NFT community.",
    link: "https://unipix-dash-six.vercel.app/",
    tag: "NFT Game",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "purple",
  },
  {
    title: "Degen Dash Game",
    type: "Web Game for NFT Project",
    year: "2026",
    description: "Fun interactive endless runner / dash-style game for the Degen NFT project.",
    link: "https://degen-dash-game.vercel.app/",
    tag: "Endless Runner",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "pink",
  },
  {
    title: "Shellmates Runner – Neon Rush",
    type: "Web Game for NFT Project",
    year: "2026",
    description: "Fast-paced runner game created for the Shellmates NFT ecosystem.",
    link: "https://shellmates-runner-neon-rush.vercel.app/",
    tag: "Neon Runner",
    icon: <Gamepad2 className="w-5 h-5" />,
    accent: "blue",
  },
];

const accentMap: Record<string, string> = {
  teal: "var(--neon-teal)",
  purple: "var(--neon-purple)",
  pink: "var(--neon-pink)",
  blue: "var(--neon-blue)",
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-neon-teal text-sm">// 02</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="text-neon-gradient">Projects</span></h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">Selected work across Web3 dashboards and NFT gaming experiences.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const color = accentMap[p.accent];
            return (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card-gradient border border-border rounded-2xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500"
                style={{ ["--accent" as never]: color }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${color}25, transparent 60%)` }}
                />
                <div className="absolute top-0 left-0 right-0 h-px opacity-50" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center border" style={{ borderColor: `${color}40`, background: `${color}15`, color }}>
                      {p.icon}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider px-2 py-1 rounded" style={{ background: `${color}15`, color }}>
                      {p.tag}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>

                <h3 className="relative text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-neon-gradient transition-all">{p.title}</h3>
                <p className="relative text-sm font-mono uppercase tracking-wider mb-4" style={{ color }}>{p.type}</p>
                <p className="relative text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                <div className="relative flex items-center gap-2 font-mono text-sm uppercase tracking-wider group-hover:gap-3 transition-all" style={{ color }}>
                  View Live <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
