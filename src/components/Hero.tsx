import heroImg from "@/assets/triny-hero.jpg";
import { ArrowUpRight, Mail, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-28 pb-16 scanlines">
      {/* moving scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-px bg-cyan/30"
          style={{ animation: "scan 7s linear infinite", boxShadow: "0 0 12px var(--cyan)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center w-full">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-cyan/30 bg-cyan/5 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" style={{ boxShadow: "0 0 8px var(--cyan)" }} />
            <span className="text-xs text-cyan uppercase tracking-[0.2em]">status: online · Lagos_NG</span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-cyan">$</span> whoami
            </p>
            <h1 className="font-display font-black leading-[0.9] text-6xl md:text-7xl xl:text-8xl">
              <span className="block text-foreground animate-glitch">TRINY</span>
              <span className="block text-cyan-gradient text-3xl md:text-4xl xl:text-5xl mt-3">
                {"// web3 builder"}
              </span>
            </h1>
          </div>

          <p className="font-mono text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            <span className="text-magenta">const</span> <span className="text-cyan">role</span> ={" "}
            <span className="text-foreground">[&quot;Creative Developer&quot;, &quot;AI Graphic Designer&quot;, &quot;On-chain Tinkerer&quot;]</span>
          </p>

          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            I build immersive Web3 experiences — real-time blockchain dashboards and on-chain NFT games — straight out of Lagos, Nigeria.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan-gradient text-primary-foreground font-mono uppercase text-sm tracking-wider font-bold hover:shadow-cyan transition-all"
            >
              <Terminal className="w-4 h-4" /> view work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-magenta/50 text-foreground font-mono uppercase text-sm tracking-wider hover:bg-magenta/10 hover:shadow-magenta transition-all"
            >
              <Mail className="w-4 h-4" /> contact
            </a>
          </div>
        </div>

        {/* avatar with HUD frame */}
        <div className="relative flex justify-center lg:justify-end animate-float">
          <div className="relative">
            <div className="absolute -inset-6 bg-duo-gradient rounded-2xl blur-3xl opacity-30 animate-pulse-glow" />
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden border border-cyan/40 shadow-cyan scanlines">
              <img
                src={heroImg || "/placeholder.svg"}
                alt="Triny — Web3 builder avatar"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              {/* HUD corner brackets */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan" />
              <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan" />
            </div>
            <div className="absolute -bottom-4 -right-3 glass px-4 py-2 rounded-md border border-magenta/40 font-mono text-xs">
              <span className="text-magenta">{">"}</span> <span className="text-foreground">building.future()</span>
              <span className="text-cyan animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/60 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {["Web3", "NFT Games", "Real-time Dashboards", "AI Design", "Solana", "DeFi", "Edge Deploy"].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-5">{t}</span>
                  <span className="text-cyan">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
