import About from "@/components/sections/About";
import ContactFooter from "@/components/sections/ContactFooter";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#17100a] transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen w-full bg-background text-foreground">
        <Hero />
        <div className="section-sheen relative">
          <Experience />
          <Projects />
          <Skills />
          <About />
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
