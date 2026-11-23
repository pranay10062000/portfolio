import About from "@/components/sections/About";
import ContactFooter from "@/components/sections/ContactFooter";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><Experience /><Projects /><Skills /><About /></main><ContactFooter /></>;
}
