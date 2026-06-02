import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triny | Web3 Builder & Creative Developer" },
      { name: "description", content: "Triny — Web3 builder, AI creator, and creative developer based in Lagos. Real-time blockchain dashboards and NFT games." },
      { property: "og:title", content: "Triny | Web3 Builder & Creative Developer" },
      { property: "og:description", content: "Building immersive Web3 experiences, real-time dashboards, and NFT games from Lagos, Nigeria." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TrinyDefi" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
