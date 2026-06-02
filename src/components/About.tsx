import { MapPin, BookOpen, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-neon-teal text-sm">// 01</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">About <span className="text-neon-gradient">Me</span></h2>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Web3 enthusiast and creative developer passionate about combining{" "}
          <span className="text-neon-teal">AI-powered design</span> with{" "}
          <span className="text-neon-purple">blockchain technology</span>. I build engaging games, real-time dashboards, and visual experiences for NFT communities.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <Card icon={<MapPin className="w-5 h-5" />} title="Location" value="Lagos, Nigeria (WAT)" />
          <Card icon={<BookOpen className="w-5 h-5" />} title="Learning" value="Solidity, Rust & Advanced JS" />
          <Card icon={<Sparkles className="w-5 h-5" />} title="Focus" value="Web3 · NFTs · AI Design" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-card-gradient border-glow rounded-xl p-5 hover:scale-105 hover:shadow-neon-teal transition-all duration-300">
      <div className="flex items-center gap-2 text-neon-teal mb-2">{icon}<span className="font-mono text-xs uppercase tracking-wider">{title}</span></div>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  );
}
