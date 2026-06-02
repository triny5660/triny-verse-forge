import heroImg from "@/assets/triny-hero.jpg";
import { Download, Mail, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-24">
      {/* Decorative blockchain nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-neon-teal animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-neon-purple animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: "2s" }} />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="25%" x2="33%" y2="75%" stroke="oklch(0.85 0.18 190)" strokeWidth="0.5" />
          <line x1="33%" y1="75%" x2="75%" y2="33%" stroke="oklch(0.65 0.27 300)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-teal/30 bg-neon-teal/5">
            <span className="w-2 h-2 rounded-full bg-neon-teal animate-pulse" />
            <span className="text-xs font-mono text-neon-teal uppercase tracking-widest">Online · Lagos, NG</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none">
            <span className="text-foreground">I'M </span>
            <span className="text-neon-gradient">TRINY</span>
          </h1>
          <p className="text-lg md:text-xl text-neon-teal font-mono">
            Web3 Builder <span className="text-neon-purple">•</span> AI Graphic Designer <span className="text-neon-purple">•</span> Creative Developer
          </p>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            Building immersive Web3 experiences, real-time dashboards, and NFT games from Lagos, Nigeria.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neon-gradient text-primary-foreground font-mono uppercase text-sm tracking-wider font-bold hover:scale-105 transition-all shadow-neon-teal"
            >
              <Rocket className="w-4 h-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-neon-purple/50 text-foreground font-mono uppercase text-sm tracking-wider hover:bg-neon-purple/10 hover:shadow-neon-purple transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-muted-foreground font-mono uppercase text-sm tracking-wider hover:text-foreground hover:border-neon-teal/50 transition-all"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-float">
          <div className="relative">
            <div className="absolute -inset-6 bg-neon-gradient rounded-full blur-3xl opacity-40 animate-pulse-glow" />
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-2 border-neon-teal/50 shadow-neon-teal">
              <img
                src={heroImg}
                alt="Triny — Web3 builder anime avatar"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-lg border border-neon-purple/40 font-mono text-xs">
              <span className="text-neon-purple">$</span> <span className="text-foreground">building.future()</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
