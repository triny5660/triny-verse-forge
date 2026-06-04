import { MapPin, BookOpen, Sparkles } from "lucide-react";

const stats = [
  { value: "4+", label: "Shipped Web3 apps" },
  { value: "100%", label: "Edge deployed" },
  { value: "WAT", label: "Lagos timezone" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-cyan text-sm">// 03</span>
          <span className="h-px flex-1 max-w-24 bg-border" />
        </div>

        {/* terminal panel */}
        <div className="bg-card-gradient border border-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
            <span className="w-3 h-3 rounded-full bg-magenta/70" />
            <span className="w-3 h-3 rounded-full bg-cyan/40" />
            <span className="w-3 h-3 rounded-full bg-cyan/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/triny — cat about.md</span>
          </div>
          <div className="p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About <span className="text-duo-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Web3 enthusiast and creative developer obsessed with merging{" "}
              <span className="text-cyan">AI-powered design</span> with{" "}
              <span className="text-magenta">blockchain technology</span>. I build engaging games,
              real-time dashboards, and visual experiences for NFT communities — fast, polished, and shipped to the edge.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <Card icon={<MapPin className="w-5 h-5" />} title="location" value="Lagos, Nigeria (WAT)" />
              <Card icon={<BookOpen className="w-5 h-5" />} title="learning" value="Solidity, Rust & Advanced JS" />
              <Card icon={<Sparkles className="w-5 h-5" />} title="focus" value="Web3 · NFTs · AI Design" />
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map((s) => (
            <div key={s.label} className="border border-border rounded-lg bg-background/40 p-5 text-center">
              <p className="font-display text-2xl md:text-4xl font-black text-cyan-gradient">{s.value}</p>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="border border-border rounded-lg p-5 bg-background/40 hover:border-cyan/40 hover:shadow-cyan transition-all duration-300">
      <div className="flex items-center gap-2 text-cyan mb-2">
        {icon}
        <span className="font-mono text-xs uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  );
}
